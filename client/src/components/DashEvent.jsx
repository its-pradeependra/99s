/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ImBin } from "react-icons/im";
import toast from "react-hot-toast";
import { ref, deleteObject, getStorage } from 'firebase/storage';
import { app } from "../firebase";

export default function DashEvent() {

    const [event, setEvent] = useState([])
    const storage = getStorage(app);

    useEffect(() => {
        const handleLoadEvent = async () => {
            try {
                const res = await fetch('/api/event/get-all-event');
                const data = await res.json();
                setEvent(data)

                if (data.success === false) {
                    toast.error("Failed to fetch Event!")
                    return;
                }
            } catch (error) {
                console.log(error);
                toast.error("Failed to fetch Event!")
            }
        };

        handleLoadEvent()
    }, [])



    const handleDeleteEvenets = async (event) => {

        let eventId = event._id;
        let imgPath = event.imageUrls;

        console.log(imgPath);


        try {
            const res = await fetch(`/api/event/delete/${eventId}`, {
                method: 'DELETE',
            });
            const data = await res.json();
            if (data.success === false) {
                toast.error('Failed to delete Event!!!')
                console.log(data.message);
                return;
            }
            setEvent((prev) =>
                prev.filter((event) => event._id !== eventId)
            );
            toast.success('Event deleted successfully');

            try {

                for (let i = 0; i < imgPath.length; i++) {
                    const imageRef = ref(storage, imgPath[i]);
                    await deleteObject(imageRef);
                    console.log('File deleted successfully', i);
                }

            } catch (error) {
                console.error('Error deleting file:', error);
            }

        } catch (error) {
            toast.error('Failed to delete Event!!!')
        }
    };

    return (
        <>
            <div className='flex overflow-x-scroll md:mx-auto p-3 my-40 sm:my-5'>
                <Link to={'/dashboard?tab=add-event'} className=" z-50 fixed top-48 left-5 px-2 text-4xl bg-black text-white ease-in-out duration-700 rounded-full  hover:text-black hover:bg-white border-2 border-black">+</Link>

                <div>
                    {event.length > 0 ? (
                        <div className="flex flex-wrap justify-center gap-6 sm:mx-auto">
                            {event.map((event, index) => (
                                <div key={index} className="flex flex-col gap-3 py-4 items-center text-center justify-center relative sm:w-56 w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-95 hover:shadow-xl">
                                    <Link to={`/event/${event._id}`}>
                                        <img src={event.imageUrls} alt={event.heading} className="w-40 h-40 object-cover rounded-xl " />
                                        <p className="w-40 text-lg font-semibold text-black truncate block capitalize">{event.heading}</p>
                                        <p className="w-40 truncate">{event.description}</p>
                                    </Link>
                                    <button onClick={() => handleDeleteEvenets(event)} className="absolute bottom-20 right-2"> <ImBin className='w-10 h-10  bg-red-600 hover:bg-white hover:text-red-600 border-2 border-red-600 p-2 rounded-full text-white' />
                                    </button>
                                </div>
                            ))
                            }
                        </div>
                    ) : (
                        <div className="flex flex-col justify-center text-center">
                            <h1 className=" font-medium text-3xl leading-[1.1] text-center my-10 text-black">You have no  <span className="text-blue-800"> News & Event yet...</span> </h1>

                            <Link to={'/dashboard?tab=add-event'} className="text-xl p-2 bg-black border-2 border-black text-white ease-in-out duration-700 rounded-full  hover:text-black hover:bg-white"> Create a News or Event....</Link>
                        </div>
                    )}
                </div>

            </div>
        </>
    )
}
