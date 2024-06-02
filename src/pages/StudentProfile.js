import React from 'react'
import FormImage1 from '../assets/img/form1.jpeg'
import FormImage2 from '../assets/img/form2.jpeg'
import Photo from '../assets/img/photo.jpg'
import Hindi from '../assets/img/hindi.jpg'
import English from '../assets/img/english.jpg'
import Parent from '../assets/img/sign.jpg'

const StudentProfile = () => {

    const profiledata = [{
        id: 1,
        column: "01",
        name: "Name",
        value: "Aditya Raj"
    },
    {
        id: 2,
        column: "02",
        name: "Gender",
        value: "Male"
    },
    {
        id: 3,
        column: "03",
        name: "Category",
        value: "General"
    },
    {
        id: 4,
        column: "04",
        name: "Date Of Birth",
        value: "1990-01-01"
    },
    {
        id: 5,
        column: "05",
        name: "Father",
        value: "Raj Kumar"
    },
    {
        id: 6,
        column: "06",
        name: "Mother",
        value: "Meera Devi"
    },
    {
        id: 7,
        column: "07",
        name: "Mobile",
        value: "1234567890"
    },
    {
        id: 8,
        column: "08",
        name: "Religion",
        value: "Hindu"
    }
    ];

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Student Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
                <div className="p-4 bg-white shadow rounded-md border">
                    <div className='header'>Photo</div>
                    <img src={Photo} alt='Student Profile' />
                </div>
                <div className="p-4 bg-white shadow rounded-md border">
                    <div className='header'>Scanned Form 1</div>
                    <img src={FormImage1} alt='Scanned Form 1' />
                </div>
                <div className="p-4 bg-white shadow rounded-md border">
                    <div className='header'>Scanned Form 2</div>
                    <img src={FormImage2} alt='Scanned Form 2' />
                </div>
                <div className="p-4 bg-white shadow rounded-md border">
                    <div className='header'>Student Hindi</div>
                    <img src={Hindi} alt='Student Hindi' />
                </div>
                <div className="p-4 bg-white shadow rounded-md border">
                    <div className='header'>Student English</div>
                    <img src={English} alt='Student English' />
                </div>
                <div className="p-4 bg-white shadow rounded-md border">
                    <div className='header'>Parents Sign</div>
                    <img src={Parent} alt='Parents Sign' />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">

                <div className="p-4 font-bold shadow rounded-md border bg-gray-100">
                    <div className="p-4 shadow rounded-md border bg-gray-200 ">
                        <h3 className="text-2xl" >Scanned Form</h3>
                        <div className="overflow-x-auto">
                        </div>
                    </div>
                    <div className="p-4 mt-4 font-bold shadow rounded-md border bg-white" style={{height: "80%"}}>

                    </div>


                </div>
                <div className="p-4 font-bold  shadow rounded-md border bg-gray-100 text-normal">
                    <div className="p-4 shadow rounded-md border bg-gray-200 ">
                        <h3 className="text-2xl font-normal mb-3" >Student Form Data</h3>

                        <div className="overflow-x-auto">
                            <table className="min-w-full font-normal bg-white shadow-md rounded-lg overflow-hidden">
                                <thead className="bg-gray-500 border-b">
                                    <tr>
                                        <th className="py-3 px-6 text-left text-sm font-medium text-white w-[5%]">ID</th>
                                        <th className="py-3 px-6 text-left text-sm font-medium text-white w-[15%]">Column</th>
                                        <th className="py-3 px-6 text-left text-sm font-medium text-white w-[30%]">Name</th>
                                        <th className="py-3 px-6 text-left text-sm font-medium text-white">Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {profiledata.map((profile, index) => (
                                        <tr key={profile.id} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                                            <td className="py-3 px-6 text-sm text-gray-700">{profile.id}</td>
                                            <td className="py-3 px-6 text-sm font-bold text-center text-gray-700">{profile.column}</td>
                                            <td className="py-3 px-6 text-sm font-semibold text-gray-700">
                                                <div className='flex'>
                                                    <div className='mr-2'>{profile.name}</div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" stroke-width="1" stroke="red" class="size-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                                                    </svg>
                                                </div></td>
                                            <td className="py-3 px-6 text-sm text-gray-700">{profile.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default StudentProfile;