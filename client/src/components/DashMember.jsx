/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ImBin } from "react-icons/im";
import toast from "react-hot-toast";
import { ref, deleteObject, getStorage } from 'firebase/storage';
import { app } from "../firebase";

export default function DashMember() {

    const storage = getStorage(app);
    const [members, setMembers] = useState([])

    useEffect(() => {
        const handleLoadMember = async () => {
            try {
                const res = await fetch('/api/member/get-all-members');
                const data = await res.json();
                setMembers(data)

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

    }, [])

    const handleDeleteMember = async (member) => {

        let memberId = member._id;
        let imgPath = member.avatar;

        try {
            const res = await fetch(`/api/member/delete/${memberId}`, {
                method: 'DELETE',
            });
            const data = await res.json();
            if (data.success === false) {
                toast.error('Failed to delete Member!!!')
                console.log(data.message);
                return;
            }
            setMembers((prev) =>
                prev.filter((member) => member._id !== memberId)
            );
            toast.success('Member deleted successfully');
            try {
                const imageRef = ref(storage, imgPath);

                await deleteObject(imageRef);
                console.log('File deleted successfully');
            } catch (error) {
                console.error('Error deleting file:', error);
            }
        } catch (error) {
            toast.error('Failed to delete Member!!!')
        }
    };
    return (
        <>
            <div className='flex overflow-x-scroll md:mx-auto p-3 my-40 sm:my-5'>
                <Link to={'/dashboard?tab=add-member'} className="z-50 fixed top-48 left-5 px-2 text-4xl bg-black text-white ease-in-out duration-700 rounded-full  hover:text-black hover:bg-white border-2 border-black">+</Link>

                <div>
                    {members.length > 0 ? (
                        <div className="flex flex-wrap justify-center gap-6 sm:mx-auto">
                            {members.map((member, index) => (
                                <div key={index} className="flex flex-col gap-2 py-4 items-center text-center justify-center relative sm:w-56 w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-95 hover:shadow-xl cursor-pointer">
                                    <img src={member.avatar} alt={member.name} className="w-40 h-40 object-cover rounded-xl " />
                                    <p className="w-40 text-lg font-semibold text-black truncate block capitalize">{member.name}</p>
                                    {member.tag != '' && (
                                        <p className="w-40 text-sm font-normal text-black truncate block capitalize">{member.tag}</p>
                                    )}
                                    <p className="w-40 text-lg font-semibold text-black truncate block capitalize">{member.yearOfJoin}</p>
                                    {/* <p className="w-40 truncate">{member.description}</p> */}
                                    <button onClick={() => handleDeleteMember(member)} className="absolute bottom-25 right-2"> <ImBin className='w-10 h-10  bg-red-600 hover:bg-white hover:text-red-600 border-2 border-red-600 p-2 rounded-full text-white' />
                                    </button>
                                </div>
                            ))
                            }
                        </div>
                    ) : (
                        <div className="flex flex-col justify-center text-center">
                            <h1 className=" font-medium text-3xl leading-[1.1] text-center my-10 text-black">You have no  <span className="text-blue-800"> Members yet...</span> </h1>

                            <Link to={'/dashboard?tab=add-member'} className="text-xl p-2 bg-black border-2 border-black text-white ease-in-out duration-700 rounded-full  hover:text-black hover:bg-white"> Create New Member....</Link>
                        </div>
                    )}
                </div>

            </div>
        </>
    )
}

