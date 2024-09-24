import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export default function NewsAndEvents() {


    const [event, setEvent] = useState([])


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
    const limitedEvents = event.slice(0, 4);

    return (


        <div className="container mx-auto px-10">
            <h1 className="text-3xl font-bold mb-4"></h1>
            <h2 className=" font-semibold leading-[1.1] text-3xl sm:text-2xl md:text-5xl text-center">News <span className="text-[#1252aa] text-2xl sm:text-xl md:text-4xl ">& </span>Events</h2>
            <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-blue-800 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-blue-800 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-blue-800"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-blue-800 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-blue-800 ml-1"></span>
            </div>
            <div className='text-right px-10'>
                <Link to={'/news_and_events'} className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg text-blue-900 hover:underline"> See More News & Event...</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {limitedEvents.map((event) => (
                    <div key={event._id} className="p-4  mb-4 border-1 bg-gray-300 bg-opacity-60 shadow-lg backdrop-blur-sm rounded-xl bg-white/30">
                        <h3 className="text-lg font-bold text-gray-800 line-clamp-1">
                            {event.heading}
                        </h3>
                        <p className="mt-2 text-gray-700 line-clamp-3">
                            {event.description}
                        </p>
                        <Link to={`/event/${event._id}`} className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg text-blue-900 hover:underline" >
                            Read More...
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

