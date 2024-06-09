import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import CalendarCard from '../components/CalendarCard'

const BASEURL = 'http://localhost:4040/'
const Dashboard = () => {

  const [schooldata, setSchooldata] = useState([])
  const [rawdata, setRawdata] = useState(0)
  const [student, setStudent] = useState({})

  console.log(BASEURL);

  const data = [
    { id: 1, title: "Total School", value: schooldata.length },
    { id: 2, title: "Scanned Form", value: rawdata },
    { id: 3, title: "Total Student", value: student.total },
    { id: 4, title: "Approved", value: student.approved },
    { id: 5, title: "Auto Approved", value: student.auto },
    { id: 6, title: "Pending", value: student.pending },
  ]
  
  const calendar = [
    {
      title: "9th Class",
      description: [
        { date: "12-10-2024", event: "Registration Apply" },
        { date: "25-11-2024", event: "Midterm Exam" },
        { date: "15-12-2024", event: "Result Declaration" }
      ]
    },
    {
      title: "10th Class",
      description: [
        { date: "07-04-2024", event: "Apply Exam Form" },
        { date: "10-06-2024", event: "Practical Exam" },
        { date: "20-07-2024", event: "Final Exam" }
      ]
    },
    {
      title: "11th Class",
      description: [
        { date: "19-08-2024", event: "Registration Apply" },
        { date: "10-10-2024", event: "Term Paper Submission" },
        { date: "15-11-2024", event: "Project Presentation" }
      ]
    },
    {
      title: "12th Class",
      description: [
        { date: "03-02-2024", event: "Apply Exam Form" },
        { date: "15-03-2024", event: "Mock Test" },
        { date: "25-04-2024", event: "Final Exam" }
      ]
    }
  ];


  useEffect(()=>{
    fetch(`${BASEURL}school/student-count`).then(response => response.json()).then(data => setSchooldata(data)).catch(error=> console.log('Console error'))
  }, [])
  useEffect(()=>{
    fetch(`${BASEURL}dashboard/studentcount`).then(response => response.json()).then(data => setRawdata(data)).catch(error=> console.log('Console error'))
  }, [])
  useEffect(()=>{
    fetch(`${BASEURL}dashboard/student`).then(response => response.json()).then(data => setStudent(data)).catch(error=> console.log('Console error'))
  }, [])

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard Content</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {data.map(carddata => (<Card data={carddata} key={carddata.id} />))}
      </div>
      <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-400"></hr>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {calendar.map(carddata => (<CalendarCard data={carddata} key={carddata.id} />))}
      </div>
      <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-400"></hr>

      <div className="grid grid-cols-1 gap-4">
        <div className="p-4 shadow rounded-md border bg-gray-200 ">
          <h3 className="text-2xl font-bold mb-3" >School Data</h3>

          <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-500 border-b">
              <tr>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[5%]">ID</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[12%]">School Code</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-white">School Name</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[15%]">Mobile</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">Total</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">Pending</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">Approved</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">Auto</th>
              </tr>
            </thead>
            <tbody>
              {schooldata.map((school, index) => (
                <tr key={school.id} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                  <td className="py-2 px-6 text-sm text-gray-700">{index +1}</td>
                  <td className="py-2 px-6 text-sm text-gray-700">{school.schoolcode}</td>
                  <td className="py-2 px-6 text-sm text-gray-700">{school.schoolname}</td>
                  <td className="py-2 px-6 text-sm text-gray-700">{school.mobile}</td>
                  <td className="py-2 px-6 text-sm text-gray-700">{school.studentCount}</td>
                  <td className="py-2 px-6 text-sm text-gray-700">{school.pendingCount}</td>
                  <td className="py-2 px-6 text-sm text-gray-700">{school.arrovedCount}</td>
                  <td className="py-2 px-6 text-sm text-gray-700">{school.autoCount}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;