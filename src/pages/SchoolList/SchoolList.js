import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const SchoolList = () => {
  const [schoollist, setSchoollist] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4040/school")
      .then((data) => data.json())
      .then((data) => setSchoollist(data))
      .catch((error) => console.error("console error", error));
  }, []);

  console.log(schoollist);
  // Logging the array to verify the output

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 gap-4">
        <div className="p-4 shadow rounded-md border bg-gray-200 ">
          <h3 className="text-2xl font-bold mb-3">School Lists:</h3>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-500 border-b">
                <tr>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white w-[5%]">
                    ID
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white w-[12%]">
                    School Code
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white">
                    School Name
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white w-[15%]">
                    Principal
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">
                    District
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">
                    Contact
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">
                    Matriculation
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">
                    Intermediate
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white w-[8%]">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {schoollist.map((school, index) => (
                  <tr
                    key={school.id}
                    className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                  >
                    <td className="py-2 px-6 text-sm text-gray-700">
                      {index + 1}
                    </td>
                    <td className="py-2 px-6 text-sm text-gray-700">
                      {school.schoolcode}
                    </td>
                    <td className="py-2 px-6 text-sm text-gray-700">
                      {school.schoolname}
                    </td>
                    <td className="py-2 px-6 text-sm text-gray-700">
                      {school.principal}
                    </td>
                    <td className="py-2 px-6 text-sm text-gray-700">
                      {school.district}
                    </td>
                    <td className="py-2 px-6 text-sm text-gray-700">
                      {school.mobile}
                    </td>
                    <td className="py-2 px-6 text-sm text-gray-700">
                      {school.matric}
                    </td>
                    <td className="py-2 px-6 text-sm text-gray-700">
                      {school.inter}
                    </td>
                    <td className="py-2 px-6 text-sm text-gray-700">
                      <NavLink to={`/school/student/${school.schoolcode}`}>
                        <button className="rounded-md px-3 py-1 ring-2 ring-pink-300 ring-inset">
                          View
                        </button>
                      </NavLink>
                    </td>
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
