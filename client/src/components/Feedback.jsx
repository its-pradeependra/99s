import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { GoUnmute } from "react-icons/go";
import { GoMute } from "react-icons/go";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const videos = [
    { url: "https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2Ffeedback%2Ffeedback-Bobby.mp4?alt=media&token=2f8e95a2-adca-49f0-8d34-6ac296054d68", name: "Bobby" },
    { url: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2Ffeedback%2Ffeedback-chandana.mp4?alt=media&token=6c83a205-2814-4596-9d6e-a3d6df695300', name: "Chnadana" },
    { url: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2Ffeedback%2Ffeedback-mamta-sachdev.mp4?alt=media&token=d02a9b2c-763e-4fcf-9b4e-2d0624633f4b', name: "Mamta Sachdeva" },
    { url: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/WebMaterial%2Ffeedback%2Fgroup_feedback.mp4?alt=media&token=e8e91eeb-ada9-4355-a9a3-4822390a8576', name: "Group" },
];

const Feedback = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isMuted, setIsMuted] = useState(true);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 640);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getVideoIndex = (index) => {
        return (currentIndex + index + videos.length) % videos.length;
    };

    const handleVideoEnd = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === videos.length - 1 ? 0 : prevIndex + 1
        );
    };

    const toggleMute = () => {
        setIsMuted((prevMuted) => !prevMuted);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === videos.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? videos.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="h-[100vh] w-[90%] flex flex-col justify-around gap-14 items-center m-auto overflow-hidden">
            {/* Heading and Subheading */}
            <div className="text-center mt-4">
                <div className="text-center max-w-2xl mx-auto">
                    <h1 className="text-3xl md:text-5xl font-bold mb-5 text-black">
                        Hear it from our own 99s
                    </h1>
                    <h3 className="text-xl mb-5 font-light">
                        Airline Pilots, Glider Pilots, Helicopter Pilots, Sea-Plane Pilots, Instructor Pilots, Air Traffic Controllers, Engineers
                    </h3>
                    <div className="text-center">
                        <span className="inline-block w-1 h-1 rounded-full bg-blue-800 ml-1"></span>
                        <span className="inline-block w-3 h-1 rounded-full bg-blue-800 ml-1"></span>
                        <span className="inline-block w-40 h-1 rounded-full bg-blue-800"></span>
                        <span className="inline-block w-3 h-1 rounded-full bg-blue-800 ml-1"></span>
                        <span className="inline-block w-1 h-1 rounded-full bg-blue-800 ml-1"></span>
                    </div>
                </div>
            </div>

            {/* Video Carousel */}
            <div className="relative flex justify-center items-center w-[90%] md:w-[60%] lg:w-[50%]">
                {[
                    getVideoIndex(-2),
                    getVideoIndex(-1),
                    getVideoIndex(0),
                    getVideoIndex(1),
                    getVideoIndex(2),
                ].map((index, i) => (
                    <div
                        key={index + Math.random()
                        }
                        className={`absolute transition-transform duration-500 ${i === 2
                            ? "z-40"
                            : i === 1 || i === 3
                                ? "z-30"
                                : "z-0 animate-fadeIn"
                            }`}
                        style={{
                            transform: `translateX(${isSmallScreen ? (i - 2) * 80 : (i - 2) * 100}%) scale(${i === 2 ? (isSmallScreen ? 1.5 : 0.8) : i === 1 || i === 3 ? (isSmallScreen ? 1.1 : 0.7) : 0.5
                                })`,
                            opacity: i === 4 ? 2 : 1,
                            width: i === 2 ? "40%" : i === 1 || i === 3 ? "34%" : "30%",
                            borderRadius: "20px",
                            overflow: "hidden",
                        }}
                    >
                        <ReactPlayer
                            url={videos[index].url}
                            playing={i === 2}
                            onEnded={i === 2 ? handleVideoEnd : null}
                            muted={isMuted}
                            width="100%"
                            height="100%"
                            className="rounded-lg shadow-lg"
                        />
                        {i === 2 && (
                            <button
                                onClick={toggleMute}
                                className="absolute bottom-2 right-2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
                            >
                                {isMuted ? <GoMute /> : <GoUnmute />}
                            </button>
                        )}
                    </div>
                ))}
            </div>

            {/* Controls and Dots */}
            <div className="w-full flex justify-center items-center space-x-8">
                <button
                    onClick={handlePrev}
                    className={`bg-gray-800 text-white p-2 rounded-full focus:outline-none
                        //                                 ${isSmallScreen ? "p-4" : "p-2"}`}
                >
                    <GrFormPrevious />
                </button>

                <div className="flex space-x-2">
                    {videos.map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-blue-500" : "bg-gray-400"
                                }`}
                        />
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    className={`bg-gray-800 text-white p-2 rounded-full focus:outline-none
                        //                                 ${isSmallScreen ? "p-4" : "p-2"}`}
                >
                    <GrFormNext />
                </button>
            </div>
        </div>
    );
};

export default Feedback;