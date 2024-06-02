import React from 'react'

const PendingStudent = () => {
    
    // const [data, setData] = useState([
    //     {
    //       id: 1,
    //       roll: "A001",
    //       name: "John Doe",
    //       gender: "Male",
    //       category: "General",
    //       father: "Robert Doe",
    //       mother: "Jane Doe",
    //       mobile: "1234567890"        },
    //     {
    //       id: 2,
    //       roll: "A002",
    //       name: "Alice Smith",
    //       gender: "Female",
    //       category: "OBC",
    //       father: "Michael Smith",
    //       mother: "Sarah Smith",
    //       mobile: "0987654321"        },
    //     {
    //       id: 3,
    //       roll: "A003",
    //       name: "David Johnson",
    //       gender: "Male",
    //       category: "SC",
    //       father: "Richard Johnson",
    //       mother: "Emily Johnson",
    //       mobile: "1122334455"        },
    //     {
    //       id: 4,
    //       roll: "A004",
    //       name: "Emma Brown",
    //       gender: "Female",
    //       category: "ST",
    //       father: "James Brown",
    //       mother: "Laura Brown",
    //       mobile: "5566778899"        },
    //     {
    //       id: 5,
    //       roll: "A005",
    //       name: "Michael Williams",
    //       gender: "Male",
    //       category: "General",
    //       father: "William Williams",
    //       mother: "Olivia Williams",
    //       mobile: "6677889900"        }
    //   ]);


    // const [editIdx, setEditIdx] = useState(null);
    // const [editField, setEditField] = useState({});


    // const handleDoubleClick = (idx, field, value) => {
    //     setEditIdx(idx);
    //     setEditField({ field, value });
    // };

    // const handleChange = (e) => {
    //     setEditField({ ...editField, value: e.target.value });
    // };

    // const handleKeyPress = (e, idx, field) => {
    //     if (e.key === 'Enter' || e.type === 'blur') {
    //         const updatedData = [...data];
    //         updatedData[idx][field] = editField.value;
    //         setData(updatedData);
    //         setEditIdx(null);
    //         setEditField({});
    //     }
    // };

    const students = [
        {
          id: 1,
          roll: "A001",
          name: "John Doe",
          gender: "Male",
          category: "General",
          father: "Robert Doe",
          mother: "Jane Doe",
          mobile: "1234567890"        },
        {
          id: 2,
          roll: "A002",
          name: "Alice Smith",
          gender: "Female",
          category: "OBC",
          father: "Michael Smith",
          mother: "Sarah Smith",
          mobile: "0987654321"        },
        {
          id: 3,
          roll: "A003",
          name: "David Johnson",
          gender: "Male",
          category: "SC",
          father: "Richard Johnson",
          mother: "Emily Johnson",
          mobile: "1122334455"        },
        {
          id: 4,
          roll: "A004",
          name: "Emma Brown",
          gender: "Female",
          category: "ST",
          father: "James Brown",
          mother: "Laura Brown",
          mobile: "5566778899"        },
        {
          id: 5,
          roll: "A005",
          name: "Michael Williams",
          gender: "Male",
          category: "General",
          father: "William Williams",
          mother: "Olivia Williams",
          mobile: "6677889900"        }
      ];
      

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 gap-4">
        <div className="p-4 shadow rounded-md border bg-gray-200 ">
          <h3 className="text-2xl font-bold mb-3" >Student Lists:</h3>

          <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-500 border-b">
              <tr>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[5%]">ID</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[8%]">Roll</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[20%]">Name</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[12%]">Gender</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">Category</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[15%]">Father</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[15%]">Mother</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[15%]">Mobile</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-white w-[8%]">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, index) => (
                <tr key={s.id} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                  <td className="py-2 px-6 text-sm text-gray-700">{s.id}</td>
                  <td className="py-2 px-6 text-sm text-gray-700">{s.roll}</td>
                  <td className="py-2 px-6 text-sm text-gray-700">{s.name}</td>
                  <td className="py-2 px-6 text-sm text-gray-700">{s.gender}</td>
                  <td className="py-2 px-6 text-sm text-gray-700">{s.category}</td>
                  <td className="py-2 px-6 text-sm text-gray-700">{s.father}</td>
                  <td className="py-2 px-6 text-sm text-gray-700">{s.mother}</td>
                  <td className="py-2 px-6 text-sm text-gray-700">{s.mobile}</td>
                  <td className="py-2 px-6 text-sm text-gray-700"><button className="rounded-md px-3 py-1 ring-2 ring-pink-300 ring-inset">View</button></td>
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