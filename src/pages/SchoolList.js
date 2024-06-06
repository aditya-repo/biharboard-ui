import React from 'react'
import { NavLink } from 'react-router-dom';

const SchoolList = () => {

    const schools = [
        {
          id: 1,
          schoolcode: 'SCH001',
          schoolname: 'Green Valley High School',
          contact: '0123456789',
          principal: 'Mr. John Doe',
          matric: 150,
          inter: 80,
          block: 'Block A',
          district: 'District 1'
        },
        {
          id: 2,
          schoolcode: 'SCH002',
          schoolname: 'Blue Ridge Elementary',
          contact: '0987654321',
          principal: 'Mrs. Jane Smith',
          matric: 120,
          inter: 60,
          block: 'Block B',
          district: 'District 2'
        },
        {
          id: 3,
          schoolcode: 'SCH003',
          schoolname: 'Sunrise Public School',
          contact: '1234567890',
          principal: 'Dr. Richard Roe',
          matric: 200,
          inter: 100,
          block: 'Block C',
          district: 'District 3'
        },
        {
          id: 4,
          schoolcode: 'SCH004',
          schoolname: 'Oceanview International',
          contact: '2345678901',
          principal: 'Ms. Mary Major',
          matric: 180,
          inter: 90,
          block: 'Block D',
          district: 'District 4'
        },
        {
          id: 5,
          schoolcode: 'SCH005',
          schoolname: 'Mountain Peak Academy',
          contact: '3456789012',
          principal: 'Mr. Peter Parker',
          matric: 130,
          inter: 70,
          block: 'Block E',
          district: 'District 5'
        },
        {
          id: 6,
          schoolcode: 'SCH006',
          schoolname: 'Riverbank Secondary School',
          contact: '4567890123',
          principal: 'Mrs. Emily Stone',
          matric: 160,
          inter: 85,
          block: 'Block F',
          district: 'District 6'
        },
        {
          id: 7,
          schoolcode: 'SCH007',
          schoolname: 'Lakeside Grammar School',
          contact: '5678901234',
          principal: 'Dr. Henry Wells',
          matric: 110,
          inter: 55,
          block: 'Block G',
          district: 'District 7'
        },
        {
          id: 8,
          schoolcode: 'SCH008',
          schoolname: 'Hillside High',
          contact: '6789012345',
          principal: 'Ms. Laura Lee',
          matric: 140,
          inter: 65,
          block: 'Block H',
          district: 'District 8'
        }
      ];
      
      // Logging the array to verify the output
      

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
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">Block</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">Contact</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">Principal Name</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">Matriculation</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">Intermediate</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[8%]">Action</th>
              </tr>
            </thead>
            <tbody>
              {schools.map((school, index) => (
                <tr key={school.id} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                  <td className="py-2 px-6 text-sm text-gray-700">{school.id}</td>
                  <td className="py-2 px-6 text-sm text-gray-700">{school.schoolcode}</td>
                  <td className="py-2 px-6 text-sm text-gray-700">{school.schoolname}</td>
                  <td className="py-2 px-6 text-sm text-gray-700">{school.block}</td>
                  <td className="py-2 px-6 text-sm text-gray-700">{school.contact}</td>
                  <td className="py-2 px-6 text-sm text-gray-700">{school.principal}</td>
                  <td className="py-2 px-6 text-sm text-gray-700">{school.matric}</td>
                  <td className="py-2 px-6 text-sm text-gray-700">{school.inter}</td>
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

export default SchoolList;