import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


export default function Member() {

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


    const section_officers_row_1 = [
        {
            id: 1,
            name: "Nivedita Jain Bhasin",
            avatar: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/Slider%2FSection%20Menbers%2Fnivedeta.jpg?alt=media&token=e35a8779-900a-4ddc-907e-f7efcc946be9',
            tag: "Governor, International Director, Life Member and Section Membership Chairman"
        },
        {
            id: 2,
            name: "Anila Bhatia Cheema",
            avatar: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/Slider%2FSection%20Menbers%2Fanila.jpg?alt=media&token=ce4b7f08-d3ca-4d68-964b-25fb556ae947',
            tag: "Vice Governor"
        },
    ]
    const section_officers_row_2 = [
        {
            id: 3,
            name: "Bobby Sachdeva",
            avatar: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/Slider%2FSection%20Menbers%2Fbobby.jpg?alt=media&token=ee110abb-433a-4b3a-b78f-04f20647e064',
            tag: "Treasurer"
        },
        {
            id: 4,
            name: "Swati Shevde",
            avatar: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/Slider%2FSection%20Menbers%2Fswati.jpg?alt=media&token=35c45ebe-d1f8-49bd-8bb2-54670b34ae2a',
            tag: "Secretary"
        },
        {
            id: 5,
            name: "Mohini Khubchand Shroff",
            avatar: 'https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/Slider%2FSection%20Menbers%2Fmohini.jpg?alt=media&token=d60ae8ad-f0f2-4499-b1eb-0402098731d8',
            tag: "Section AEMSF Chairman and Life Member"
        },
    ]


    return (
        <section id="members" className="container mx-auto px-4 space-y-8 bg-slate-50 py-20 md:py-20 lg:py-48 bg-slate-50 pt-[42%] md:pt-[8%]">
            {/* -------------Section Members------------- */}
            <div className="space-y-4">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className=" font-semibold text-3xl leading-[1.1] sm:text-2xl md:text-5xl">Section Officers <span className="text-4xl md:text-6xl text-[#1252aa]">99s</span></h2>


                    <h3 className="max-w-[85%]  leading-normal sm:text-lg sm:leading-7 text-center">
                        Guiding and navigating the path ahead towards aviation education & awareness and mentorship & scholarships
                    </h3>
                    <div className="text-center mb-10">
                        <span className="inline-block w-1 h-1 rounded-full bg-blue-800 ml-1"></span>
                        <span className="inline-block w-3 h-1 rounded-full bg-blue-800 ml-1"></span>
                        <span className="inline-block w-40 h-1 rounded-full bg-blue-800"></span>
                        <span className="inline-block w-3 h-1 rounded-full bg-blue-800 ml-1"></span>
                        <span className="inline-block w-1 h-1 rounded-full bg-blue-800 ml-1"></span>
                    </div>

                </div>

                <div className="flex justify-evenly flex-col md:flex-row sm:flex-row my-12 px-0 sm:px-44">
                    {section_officers_row_1.map((member) => (
                        <div key={member.id} className="w-full flex flex-col justify-center items-center">
                            <img className="rounded-full w-52 h-52 object-cover" src={member.avatar} alt={member.name} />
                            <div className="p-5  text-center">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 ">{member.name}</h3>
                                <span className="text-gray-500">{member.tag}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex sm:flex-row flex-col gap-8 mb-6">
                    {
                        section_officers_row_2.map((member) => (
                            <div key={member.id} className="w-full flex flex-col justify-center items-center">
                                <div className="w-full flex flex-col justify-center items-center">
                                    <img className="rounded-full w-52 h-52 object-cover" src={member.avatar} alt={member.name} />
                                    <div className="p-5 text-center ">
                                        <h3 className="text-xl font-bold tracking-tight text-gray-900 ">{member.name}</h3>
                                        <span className="text-gray-500">{member.tag}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }


                </div>

                <div>
                    <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                        <h2 className=" font-semibold text-3xl leading-[1.1] sm:text-2xl md:text-5xl">Presenting India&apos;s <span className="text-4xl md:text-6xl text-[#1252aa]">99s</span></h2>

                        <h3 className="max-w-[85%]   leading-normal sm:text-lg sm:leading-7 text-center">
                            A strong community where individuals are rising above difficulties and transforming the aviation industry. They are all examples of determination, skill, and dedication.
                        </h3>

                        <div className="text-center mb-10">
                            <span className="inline-block w-1 h-1 rounded-full bg-blue-800 ml-1"></span>
                            <span className="inline-block w-3 h-1 rounded-full bg-blue-800 ml-1"></span>
                            <span className="inline-block w-40 h-1 rounded-full bg-blue-800"></span>
                            <span className="inline-block w-3 h-1 rounded-full bg-blue-800 ml-1"></span>
                            <span className="inline-block w-1 h-1 rounded-full bg-blue-800 ml-1"></span>
                        </div>

                    </div>
                    <div className="mx-auto grid justify-center gap-2 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 px-6 md:px-2">
                        {
                            members.map((member) => (
                                <Link to={`/member/${member._id}`} key={member._id}>
                                    <div className="flex gap-2 flex-col justify-between rounded-md p-6 items-center">
                                        <img className="h-40 w-40 rounded-full  transition-all ease-in-out duration-500 cursor-pointer object-cover" src={member.avatar} alt={member.name} />

                                        <div className="space-y-1">
                                            <h3 className="font-bold text-center">{member.name}</h3>
                                            <p className="text-sm line-clamp-2 text-center">{member.yearOfJoin}</p>
                                            <p className="text-sm line-clamp-2 text-center">{member.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>

                </div>
            </div>

        </section>
    )
}