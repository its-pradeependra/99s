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

export default function AddMember() {

    const fileRef = useRef(null);
    const navigate = useNavigate()
    const [file, setFile] = useState(undefined);
    const [filePerc, setFilePerc] = useState(0);
    const [fileUploadError, setFileUploadError] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        yearOfJoin: '',
        avatar: '',
        tag: '',
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
                    setFormData({ ...formData, avatar: downloadURL }),
                );
            }
        );
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/member/create-member', {
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
            toast.success("Member added successfully")
            navigate('/dashboard?tab=member');
            setFormData({
                name: '',
                description: '',
                yearOfJoin: '',
                avatar: '',
                tag: '',
            })
        } catch (error) {
            console.log(error);
            toast.error("Failed to add Member!")
        }
    };

    const currentYear = new Date().getFullYear()
    console.log(formData);


    return (
        <section className=" w-full pt-[30%] md:pt-[4%]">
            <Link to={'/dashboard?tab=member'} className="fixed top-48 left-5 text-4xl bg-black text-white ease-in-out duration-700 rounded-full  hover:text-black hover:bg-white border-2 border-black"><IoArrowBack /></Link>
            <h1 className="font-semibold text-3xl leading-[1.1] sm:text-2xl md:text-5xl justify-between text-center mb-2 text-black">Add  <span className="text-blue-800">Member...</span> </h1>

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
                        src={formData.avatar || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
                        alt="profile"
                        className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
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

                    <input
                        type="text"
                        placeholder="Name"
                        id="name"
                        className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none  border-gray-300 focus:border-blue-600 ring-gray-100 "
                        onChange={handleChange}
                    />


                    <div className="relative max-w-sm">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </div>
                        <input type="number"
                            id="yearOfJoin"
                            name="yearOfJoin"
                            min="1965"
                            max={currentYear} onChange={handleChange}
                            step="1" className=" w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none  border-gray-300 focus:border-blue-600 ring-gray-100  bg-gray text-gray-900 text-sm  focus:ring-blue-500  block ps-10 p-2.5" placeholder="Select Year of join" />
                    </div>
                    <input
                        type="text"
                        placeholder="Tag"
                        id="tag"
                        className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none  border-gray-300 focus:border-blue-600 ring-gray-100 "
                        onChange={handleChange}
                    />

                    <textarea placeholder="Description...."
                        className="w-full px-4 py-3 border-2 placeholder:text-gray-800  rounded-md outline-none focus:ring-4  border-gray-300 focus:border-blue-600 ring-gray-100 "
                        name="description" id="description" onChange={handleChange}>
                    </textarea>

                    <button className="w-full py-4 font-semibold text-white transition-colors bg-blue-800 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7">Add Member
                    </button>

                </form>
            </div>
        </section>
    )
}
