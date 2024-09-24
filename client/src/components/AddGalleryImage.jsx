
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { IoArrowBack } from "react-icons/io5";
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import toast from 'react-hot-toast';
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddGalleryImage() {

    const fileRef = useRef(null);
    const navigate = useNavigate()
    const [file, setFile] = useState(undefined);
    const [filePerc, setFilePerc] = useState(0);
    const [fileUploadError, setFileUploadError] = useState(false);
    const [formData, setFormData] = useState({
 
        image: '',
    });

    useEffect(() => {
        if (file) {
            handleFileUpload(file);
        }
    }, [file]);


    const handleFileUpload = (file) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setFilePerc(Math.round(progress));
            },
            (error) => {
                setFileUploadError(true);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
                    setFormData({ ...formData, image: downloadURL }),
                );
            }
        );
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/gallery/create-image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success === false) {
                console.log(data.message);
                return;
            }
            toast.success("Image added successfully")
            navigate('/dashboard?tab=gallery');
        } catch (error) {
            console.log(error);
            toast.error("Failed to add Image!")
        }
    };


    return (
        <section className=" w-full pt-[30%] md:pt-[4%]">
            <Link to={'/dashboard?tab=gallery'} className="fixed top-48 left-5 text-4xl bg-black text-white ease-in-out duration-700 rounded-full  hover:text-black hover:bg-white border-2 border-black"><IoArrowBack /></Link>
            <h1 className="font-semibold text-3xl leading-[1.1] sm:text-2xl md:text-5xl justify-between text-center mb-2 text-black">Add New<span className="text-blue-800"> Image...</span> </h1>

            <div className="w-96 m-auto bg-gray-300 bg-opacity-60 shadow-lg px-10 py-10  backdrop-blur-sm rounded-xl bg-white/30">

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        onChange={(e) => setFile(e.target.files[0])
                        }
                        type="file"
                        ref={fileRef}
                        hidden
                        accept="image/*"
                    />
                    <img
                        onClick={() => fileRef.current.click()}
                        src={formData.image || 'https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg'}
                        alt="profile"
                        className="rounded-xl h-48 w-80 object-cover cursor-pointer self-center mt-2"
                    />
                    <p className="text-sm self-center">
                        {fileUploadError ? (
                            <span className="text-red-700">
                                Error uploading Image
                            </span>
                        ) : filePerc > 0 && filePerc < 100 ? (
                            <span className="text-green-700">{`Uploading ${filePerc}%`}</span>
                        ) : filePerc === 100 ? (
                            <span className="text-green-700">Image successfully uploaded!</span>
                        ) : (
                            ""
                        )}
                    </p>

                   
                    <button disabled={filePerc < 99 ? true : false} className="w-full py-4 font-semibold text-white transition-colors bg-blue-800 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7">Add Image
                    </button>

                </form>
            </div>
        </section>
    )
}
