import React from 'react'
import { NavLink } from 'react-router-dom';

const PendingReview = () => {

  const schooldata = [
    {
      id: 1,
      schoolcode: 52046,
      schoolname: "High School, Halsi",
      total: 450,
      pending: 345,
      approved: 94,
      auto: 11
    },
    {
      id: 2,
      schoolcode: 52047,
      schoolname: "Central School, Main Street",
      total: 500,
      pending: 200,
      approved: 250,
      auto: 50
    },
    {
      id: 3,
      schoolcode: 52048,
      schoolname: "Green Valley High",
      total: 600,
      pending: 100,
      approved: 450,
      auto: 50
    },
    {
      id: 4,
      schoolcode: 52049,
      schoolname: "Mountain View School",
      total: 300,
      pending: 50,
      approved: 200,
      auto: 50
    },
    {
      id: 5,
      schoolcode: 52050,
      schoolname: "Riverdale High School",
      total: 550,
      pending: 300,
      approved: 200,
      auto: 50
    }
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 gap-4">
        <div className="p-4 shadow rounded-md border bg-gray-200 ">
          <h3 className="text-2xl font-bold mb-3" >School Lists:</h3>

          <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-500 border-b">
              <tr>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[5%]">ID</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[12%]">School Code</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-white">School Name</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">Total</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">Auto</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">Approved</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">Pending</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[8%]">Action</th>
              </tr>
            </thead>
            <tbody>
              {schooldata.map((school, index) => (
                <tr key={school.id} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                  <td className="py-2 px-6 text-sm text-gray-700">{school.id}</td>
                  <td className="py-2 px-6 text-sm text-gray-700">{school.schoolcode}</td>
                  <td className="py-2 px-6 text-sm text-gray-700">{school.schoolname}</td>
                  <td className="py-2 px-6 text-sm text-gray-700">{school.total}</td>
                  <td className="py-2 px-6 text-sm text-gray-700">{school.auto}</td>
                  <td className="py-2 px-6 text-sm text-gray-700">{school.approved}</td>
                  <td className="py-2 px-6 text-sm text-gray-700">{school.pending}</td>
                  <td className="py-2 px-6 text-sm text-gray-700"><NavLink to={'/pending-review/students'}><button className="rounded-md px-3 py-1 ring-2 ring-pink-300 ring-inset">View</button></NavLink></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PendingReview;