import React, { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
const URL = "http://localhost:4040/";

const PendingStudent = () => {
  const [studentlist, setStudentlist] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch(`${URL}school/pendingstudentlist/${id}`)
      .then((data) => data.json())
      .then((data) => setStudentlist(data))
      .catch((error) => console.error("console error", error));
  }, [id]);

  console.log(studentlist);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <button
          className="rounded-md py-1 ring-2 ring-red-300 ring-inset bg-red-800 px-4 text-white"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div className="p-4 shadow rounded-md border bg-gray-200 ">
          <h3 className="text-2xl font-bold mb-3">Student Lists:</h3>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-500 border-b">
                <tr>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white w-[5%]">
                    ID
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white w-[12%]">
                    Student Id
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white w-[8%]">
                    Form
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white w-[20%]">
                    Name
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white w-[12%]">
                    Gender
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">
                    Caste
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white w-[15%]">
                    Father
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white w-[15%]">
                    Adhaar
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white w-[15%]">
                    Mobile
                  </th>
                  <th
                    className="py-3 px-6 text-left text-sm font-medium text-center text-white w-[8%]"
                    colSpan={2}
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {studentlist.map((s, index) => (
                  <tr
                    key={s.id}
                    className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                  >
                    <td className="py-2 px-6 text-sm text-gray-700">
                      {index + 1}
                    </td>
                    <td className="py-2 px-6 text-sm text-gray-700">
                      {s.studentuid}
                    </td>
                    <td className="py-2 px-6 text-sm text-gray-700">
                      {s.formtype}
                    </td>
                    <td className="py-2 px-6 text-sm text-gray-700">
                      {s.name}
                    </td>
                    <td className="py-2 px-6 text-sm text-gray-700">
                      {s.gender}
                    </td>
                    <td className="py-2 px-6 text-sm text-gray-700">
                      {s.caste}
                    </td>
                    <td className="py-2 px-6 text-sm text-gray-700">
                      {s.father}
                    </td>
                    <td className="py-2 px-6 text-sm text-gray-700">
                      {s.adhaar}
                    </td>
                    <td className="py-2 px-6 text-sm text-gray-700">
                      {s.phone}
                    </td>
                    <td className="py-2 pl-6 pr-2 text-sm text-gray-700">
                      <NavLink to={`/pending-review/students/${s.studentuid}`}>
                        <button className="rounded-md px-3 py-1 ring-2 ring-pink-300 ring-inset">
                          Partial
                        </button>
                      </NavLink>
                    </td>
                    <td className="py-2 pr-6 pl-2 text-sm text-gray-700">
                      <NavLink to={`/student/${s.studentuid}`}>
                        <button className="rounded-md px-3 py-1 ring-2 ring-pink-300 ring-inset">
                          Full
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

export default PendingStudent;
