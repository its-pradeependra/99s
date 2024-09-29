/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback } from 'react';
import {
    deleteObject,
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../firebase';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

// Initialize storage once
const storage = getStorage(app);

export default function AddEvent() {
    const { currentUser } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const [files, setFiles] = useState([]);
    const [formData, setFormData] = useState({
        imageUrls: [],
        heading: '',
        description: '',
    });
    const [imageUploadError, setImageUploadError] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleImageSubmit = useCallback(async () => {
        if (files.length === 0 || files.length + formData.imageUrls.length > 6) {
            setImageUploadError('You can only upload 6 images per listing');
            return;
        }
        setUploading(true);
        setImageUploadError(false);

        try {
            const uploadPromises = files.map(storeImage);
            const uploadedUrls = await Promise.all(uploadPromises);
            setFormData(prev => ({
                ...prev,
                imageUrls: [...prev.imageUrls, ...uploadedUrls],
            }));
        } catch {
            setImageUploadError('Image upload failed (image size is too high)');
        } finally {
            setUploading(false);
        }
    }, [files, formData.imageUrls]);

    const storeImage = useCallback((file) => {
        return new Promise((resolve, reject) => {
            const fileName = `${new Date().getTime()}_${file.name}`;
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                'state_changed',
                null, // We can skip progress reporting here unless needed.
                reject,
                async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    resolve(downloadURL);
                }
            );
        });
    }, []);

    const handleRemoveImage = useCallback(async (url, index) => {
        setFormData(prev => ({
            ...prev,
            imageUrls: prev.imageUrls.filter((_, i) => i !== index),
        }));

        try {
            const imageRef = ref(storage, url);
            await deleteObject(imageRef);
            console.log('File deleted successfully');
        } catch (error) {
            console.error('Error deleting file:', error);
        }
    }, []);

    const handleChange = useCallback((e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.imageUrls.length < 1) {
            setError('You must upload at least one image');
            return;
        }

        setLoading(true);
        setError(false);

        try {
            const res = await fetch('/api/event/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    userRef: currentUser._id,
                }),
            });
            const data = await res.json();

            if (data.success === false) {
                setError(data.message);
                toast.error('Failed to add event!!!');
            } else {
                toast.success('Event added successfully.');
                navigate('/dashboard?tab=event');
            }
        } catch (err) {
            setError(err.message);
            toast.error('Failed to add event!!!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="p-3 max-w-6xl mx-auto">
            <h1 className="font-medium text-3xl leading-[1.1] text-center my-10 text-black">
                Create a <span className="text-blue-800">News & Event...</span>
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-4xl text-center">
                <div className="flex flex-col gap-4 flex-1">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none border-gray-300 focus:border-blue-600 ring-gray-100"
                        id="heading"
                        minLength="10"
                        required
                        onChange={handleChange}
                        value={formData.heading}
                    />
                    <textarea
                        placeholder="Description"
                        className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-blue-600 ring-gray-100"
                        id="description"
                        required
                        onChange={handleChange}
                        value={formData.description}
                    />
                    <p className="font-semibold">
                        Images:
                        <span className="font-normal text-gray-600 ml-2">
                            The first image will be the cover (max 6)
                        </span>
                    </p>
                    <div className="flex flex-col gap-4">
                        <input
                            onChange={(e) => setFiles(e.target.files)}
                            className="p-3 border border-gray-300 rounded w-full"
                            type="file"
                            accept="image/*"
                            multiple
                        />
                        <button
                            disabled={files.length <= 0 || uploading}
                            type="button"
                            onClick={handleImageSubmit}
                            className="w-full py-4 font-semibold text-white transition-colors bg-green-800 hover:bg-green-700 px-7 p-3 rounded-lg border border-green-700 uppercase hover:shadow-lg disabled:opacity-80"
                        >
                            {uploading ? 'Uploading...' : 'Upload'}
                        </button>
                    </div>
                </div>
                {imageUploadError && <p className="text-red-700 text-sm">{imageUploadError}</p>}
                <div className="flex flex-col gap-4">
                    {formData.imageUrls.length > 0 ? (
                        formData.imageUrls.map((url, index) => (
                            <div key={url} className="flex justify-between p-3 border items-center">
                                <img src={url} alt="listing" className="w-20 h-20 object-contain rounded-lg" />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveImage(url, index)}
                                    className="p-3 text-red-700 rounded-lg uppercase hover:opacity-75"
                                >
                                    Delete
                                </button>
                            </div>
                        ))
                    ) : (
                        <h1 className="font-medium text-3xl leading-[1.1] text-center my-10 text-black">
                            You have no <span className="text-blue-800">Images yet...</span>
                        </h1>
                    )}
                    <button
                        disabled={uploading}
                        className="w-full py-4 font-semibold text-white transition-colors bg-blue-800 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7"
                    >
                        {loading ? 'Creating...' : 'Add News & Event'}
                    </button>
                    {error && <p className="text-red-700 text-sm">{error}</p>}
                </div>
            </form>
        </main>
    );
}