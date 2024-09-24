
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Modal } from 'flowbite-react';
import { ImBin } from "react-icons/im";
import toast from "react-hot-toast";
import { deleteObject, getStorage, ref } from "firebase/storage";
import { app } from "../firebase";
import { Link } from "react-router-dom";


export default function DashGallery() {

    const storage = getStorage(app);
    const [gallery, setGallery] = useState([])

    useEffect(() => {
        const handleLoadGallery = async () => {
            try {
                const res = await fetch('/api/gallery/get-gallery');
                const data = await res.json();
                setGallery(data)

                if (data.success === false) {
                    toast.error("Failed to fetch Gallery!")
                    return;
                }
            } catch (error) {
                console.log(error);
                toast.error("Failed to fetch Gallery!")
            }
        };

        handleLoadGallery()
    }, [])

    const handleDeleteImage = async (image) => {

        let imageId = image._id;
        let imgPath = image.image;

        try {
            const res = await fetch(`/api/gallery/delete/${imageId}`, {
                method: 'DELETE',
            });
            const data = await res.json();
            if (data.success === false) {
                toast.error('Failed to delete Image!!!')
                console.log(data.message);
                return;
            }
            setGallery((prev) =>
                prev.filter((gallery) => gallery._id !== imageId)
            );
            toast.success('Image deleted successfully');
            try {
                const imageRef = ref(storage, imgPath);

                // Delete the file
                await deleteObject(imageRef);
                console.log('Image deleted successfully');
            } catch (error) {
                console.error('Error deleting Image:', error);
            }
        } catch (error) {
            toast.error('Failed to delete Image!!!')
        }
    };

    return (
        <div className='flex overflow-x-scroll md:mx-auto p-3 my-40 sm:my-5'>
            <Link to={'/dashboard?tab=add-gallery'} className="fixed top-48 left-5 px-2 text-4xl bg-black text-white ease-in-out duration-700 rounded-full  hover:text-black hover:bg-white border-2 border-black">+</Link>

            <div className="py-8">
                {gallery.length > 0 ? (
                    <div className="flex flex-wrap justify-center gap-6 sm:mx-auto">
                        {gallery.map((gallery, index) => (
                            <div key={index} className="relative sm:w-56 w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-95 hover:shadow-xl">
                                <img src={gallery.image} alt={gallery.name} className="w-full  h-40 object-cover rounded-xl " />
                                <button onClick={() => handleDeleteImage(gallery)} className="absolute bottom-10 right-2"> <ImBin className='w-10 h-10  bg-red-600 hover:bg-white hover:text-red-600 border-2 border-red-600 p-2 rounded-full text-white' />
                                </button>
                            </div>
                        ))
                        }
                    </div>
                ) : (
                    <div className="flex flex-col justify-center text-center">
                        <h1 className=" font-medium text-3xl leading-[1.1] text-center my-10 text-black">You have no  <span className="text-blue-800"> Image yet...</span> </h1>

                        <Link to={'/dashboard?tab=add-gallery'} className="text-xl p-2 bg-black border-2 border-black text-white ease-in-out duration-700 rounded-full  hover:text-black hover:bg-white"> Add New Image....</Link>
                    </div>
                )}
            </div>

        </div>
    )
}
