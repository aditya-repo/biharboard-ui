import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
const URL = 'http://localhost:4040/'

const PendingReview = () => {

  const navigate = useNavigate();
  const [studentlist, setStudentlist] = useState([]);

  useEffect(() => {
    fetch(`${URL}student/pendingreview`)
      .then((data) => data.json())
      .then((data) => setStudentlist(data))
      .catch((error) => console.error("console error", error));
  }, []);
  
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
      
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <button className="rounded-md py-1 ring-2 ring-red-300 ring-inset bg-red-800 px-4 text-white"  onClick={() => navigate(-1)}>Go Back</button> 
        </div>
      <div className="grid grid-cols-1 gap-4">
        <div className="p-4 shadow rounded-md border bg-gray-200 ">      
          <h3 className="text-2xl font-bold mb-3">School Lists:</h3>
          <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-500 border-b">
              <tr>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[5%]">ID</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[12%]">School Code</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-white">School Name</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[15%]">Village</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">Total</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">Pending</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[8%]">Action</th>
              </tr>
            </thead>
            <tbody>
            {
              studentlist.map((school, index) => (
                school.pendingCount !== 0 && (
                  <tr key={school.id} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                    <td className="py-2 px-6 text-sm text-gray-700">{index + 1}</td>
                    <td className="py-2 px-6 text-sm text-gray-700">{school.schoolcode}</td>
                    <td className="py-2 px-6 text-sm text-gray-700">{school.schoolname}</td>
                    <td className="py-2 px-6 text-sm text-gray-700">{school.district}</td>
                    <td className="py-2 px-6 text-sm text-gray-700">{school.studentCount}</td>
                    <td className="py-2 px-6 text-sm text-gray-700">{school.pendingCount}</td>
                    <td className="py-2 px-6 text-sm text-gray-700">
                      <NavLink to={`/pending-review/${school.schoolcode}`}>
                        <button className="rounded-md px-3 py-1 ring-2 ring-pink-300 ring-inset">View</button>
                      </NavLink>
                    </td>
                  </tr>
                )
              ))
            }
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PendingReview;