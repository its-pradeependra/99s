import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaShare, FaAngleLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";


export default function MemberView() {

    const [member, setMember] = useState([])
    const [copied, setCopied] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const params = useParams();
    const navigate = useNavigate()


    useEffect(() => {
        const handleLoadMember = async () => {
            try {
                const res = await fetch(`/api/member/get-member/${params.memberId}`);
                const data = await res.json();
                setMember(data)

                if (data.success === false) {
                    toast.error("Failed to fetch Member!")
                    return;
                }
            } catch (error) {
                console.log(error);
                toast.error("Failed to fetch Member!")
            }
        };

        handleLoadMember()

    }, [params.memberId])



    const handleOpenModal = () => {
        setOpenModal(true)
    }

    // Close Modal
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    return (

        <div className="flex flex-col sm:flex-row w-full h-100vh pt-44 sm:pt-[8%] px-0 sm:px-60 items-center bg-white">

            <div className="w-[90%] sm:w-1/2 flex flex-col gap-3 py-14 sm:py-20 pl-[12%]">
                <h2 className="text-2xl font-semibold leading-tight text-black sm:text-3xl lg:text-4xl">
                    {member.name}
                </h2>
                {
                    member.tag && (

                        <h1 className="text-lg md:text-lg  font-medium  ">
                            {member.tag}
                        </h1>
                    )
                }
                <h1 className="text-lg md:text-lg  font-medium text-gray-700 -mt-3 ">
                    Year of joining:  <span className="text-blue-800 text-xl font-semibold">{member.yearOfJoin}</span>
                </h1>

                <p className="text-gray-700 text-wrap text-justify w-full sm:w-auto">
                    {member.description}
                </p>

            </div>

            {/* Share Button */}
            <div className='fixed top-[20%] bg-black text-white ease-in-out duration-700 hover:text-black hover:bg-white left-[3%] z-10 border-2 border-black rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer'>
                <FaAngleLeft
                    className=''
                    onClick={() => navigate('/member')}
                />
            </div>

            <div className='fixed top-[20%] bg-black text-white ease-in-out duration-700 hover:text-black hover:bg-white right-[3%] z-10 border-2 border-black rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer'>
                <FaShare
                    className=''
                    onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        setCopied(true);
                        setTimeout(() => {
                            setCopied(false);
                        }, 2000);
                    }}
                />
            </div>
            {copied && (
                <p className='fixed top-[23%] right-[5%] z-10 font-medium rounded-md bg-slate-100 p-2'>
                    Link copied!
                </p>
            )}
            {openModal && (
                // <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-40"  onClick={handleCloseModal}>
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <button onClick={handleCloseModal} className="absolute top-4 right-4 text-white text-2xl  cursor-pointer opacity-70 z-50 hover:opacity-100 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <img className="max-h-full max-w-full" src={member.avatar} alt="Selected" />
                    <h1 className="z-50 fixed top-20 bg-white text-black rounded-md px-5 uppercase py-1 font-semibold">{member.name}</h1>
                </div>
            )}

            <div className="w-full sm:w-1/2 p-20 bg-white cursor-pointer" onClick={() => handleOpenModal(member._id)}>
                <img className=" object-cover  rounded-full border-2 border-black " src={member.avatar} />
            </div>

        </div>


    )
}
