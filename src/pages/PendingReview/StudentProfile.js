import React, { useEffect, useState } from "react";
// import FormImage1 from "../../assets/img/form1.png";
// import FormImage2 from "../../assets/img/form2.png";
// import FormImage2 from '../assets/img/form2.jpeg'
import Photo from "../../assets/img/photo.jpg";
import EditableTableCell from "../../components/EditTableCell";
import { useParams, useNavigate } from "react-router-dom";
import mapStudentData from "../../util/mapstudentData";
// import Hindi from '../assets/img/hindi.jpg'
// import English from '../assets/img/english.jpg'
// import Parent from '../assets/img/sign.jpg'

const URL = "http://localhost:4040/";

const PendingStudentProfile = () => {
  // For image
  const form = "http://localhost:4040/form/";
  const [selectedImage, setSelectedImage] = useState(null);
  const { id } = useParams();
  const [profiledata, setProfiledata] = useState([]);
  const [rawdata, setRawdata] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${URL}student/${id}`);
      const data = await response.json();
      const result = mapStudentData(data);
      setProfiledata(result);
      setRawdata(data.correction);
    };

    fetchData();
  }, []);

  // console.log(`${URL}student/${id}`);

  const handleClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const imagePath = [
    { id: 1, name: "Item 1", imgSrc: "https://via.placeholder.com/150" },
    { id: 2, name: "Item 2", imgSrc: "https://via.placeholder.com/150" },
    { id: 3, name: "Item 3", imgSrc: "https://via.placeholder.com/150" },
    { id: 4, name: "Item 4", imgSrc: "https://via.placeholder.com/150" },
    { id: 5, name: "Item 5", imgSrc: "https://via.placeholder.com/150" },
    { id: 6, name: "Item 6", imgSrc: "https://via.placeholder.com/150" },
  ];

  // Define coordinates once
  // const coordinates = {
  //   name: { x: 90, y: 195, width: 100, height: 55 },
  //   gender: { x: 0, y: 100, width: 100, height: 55 },
  //   category: { x: 0, y: 150, width: 100, height: 55 },
  //   dob: { x: 0, y: 200, width: 800, height: 55 },
  //   father: { x: 0, y: 350, width: 2400, height: 75 },
  //   mother: { x: 0, y: 550, width: 100, height: 55 },
  //   mobile: { x: 0, y: 350, width: 100, height: 55 },
  //   religion: { x: 50, y: 400, width: 100, height: 55 },
  // };

  const [zoomCoords, setZoomCoords] = useState(null);

  // const handleDoubleClick = (field) => {
  //   const coords = coordinates[field];
  //   setZoomCoords(coords);
  //   console.log(coords);
  // };

  const coordinate = {
    width: zoomCoords ? `${zoomCoords.width}%` : "100%",
    height: zoomCoords ? `${zoomCoords.height}px` : "auto",
    objectFit: zoomCoords ? "cover" : "inherit",
    objectPosition: zoomCoords
      ? `-${zoomCoords.x}px -${zoomCoords.y}px`
      : "0px - 0px",
  };

  const [isActive, setIsActive] = useState(false);
  const toggleCheckbox = () => {
    setIsActive(!isActive); // Toggle isActive state
  };

  // Approve Student
  const [approval, setApproval] = useState(false);

  const handleApprove = () => {
    const data = {
      approval: "true",
      manualapproval: true,
    };
    setApproval(true);
    saveData(`${URL}student/${id}`, data);
    setTimeout(() => {
      setApproval(false);
    }, 150);
  };

  const saveData = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error("Error saving data:", error);
      throw error;
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4">Student Profile</h2>

        <button
          className="rounded-md py-1 ring-2 ring-red-300 ring-inset bg-red-800 px-4 text-white"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
        <div className="p-4 font-bold shadow rounded-md border bg-gray-100">
          <div className="p-4 shadow rounded-md border bg-gray-200 ">
            <div className="flex justify-between">
              <h3 className="text-2xl">Scanned Form</h3>
              <label class="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isActive}
                  onChange={toggleCheckbox}
                  class="sr-only peer"
                />
                <span class="ms-3 text-sm font-medium pr-3">Page 1</span>
                <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ms-3 text-sm font-medium">Page 2</span>
              </label>
            </div>
            <div className="overflow-x-auto"></div>
          </div>
          <div className="relative">
            <img
              src={isActive ? `${form}b.PNG` : `${form}f.PNG`}
              style={coordinate}
              alt="Scanned Documents"
            />
          </div>
        </div>
        <div className="p-4 font-bold  shadow rounded-md border bg-gray-100 text-normal">
          <div className="p-4 shadow rounded-md border bg-gray-200 ">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-2xl font-normal">Student Form Data</h3>
              <button
                className="rounded-md py-1 ring-2 ring-red-300 ring-inset bg-red-400 px-4"
                onClick={handleApprove}
              >
                {approval ? "Approving..." : "Approve"}
              </button>
            </div>
            {rawdata.length > 0 ? (
              <p>
                Correction Data: [
                {rawdata.map((display, index) => (
                  <span
                    key={index}
                    style={{ textTransform: "uppercase", color: "red" }}
                  >
                    - {display} -{" "}
                  </span>
                ))}
                ]
              </p>
            ) : (
              ""
            )}
            <div className="overflow-x-auto">
              <table className="min-w-full font-normal bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-500 border-b">
                  <tr>
                    <th className="py-2 px-6 text-left text-sm font-medium text-white w-[10%]">
                      Sr
                    </th>
                    <th className="py-2 px-6 text-left text-sm font-medium text-white w-[15%]">
                      Column
                    </th>
                    <th className="py-2 px-6 text-left text-sm font-medium text-white w-[30%]">
                      Name
                    </th>
                    <th className="py-2 px-6 text-left text-sm font-medium text-white">
                      Values
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {profiledata.map((profile, index) =>
                    rawdata.includes(profile.field) ? (
                      <tr
                        key={profile.id}
                        className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                      >
                        <td className="py-3 px-6 text-sm font-bold text-center text-gray-700">
                          {profile.id}
                        </td>
                        <td className="py-3 px-6 text-sm  text-center text-gray-700">
                          {profile.column}
                        </td>
                        <td className="py-3 px-6 text-sm font-semibold text-gray-700">
                          <div className="flex">
                            <div className="mr-2">{profile.name}</div>
                            {rawdata.includes(profile.field) ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 30 30"
                                stroke-width="1"
                                stroke="red"
                                class="size-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                                />
                              </svg>
                            ) : (
                              ""
                            )}
                          </div>
                        </td>
                        <EditableTableCell
                          key={profile.id}
                          initialValue={profile.value}
                          fieldName={profile.field}
                          studentId={id}
                          shortcut={profile.shortcut}
                        />
                      </tr>
                    ) : (
                      ""
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
        {imagePath.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-white shadow rounded-md border cursor-pointer"
            onClick={() => handleClick(item.imgSrc)}
          >
            <div className="header">{item.name}</div>
            <img
              src={item.imgSrc}
              alt={item.name}
              className="w-full h-auto mb-2"
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleClose}
        >
          <div className="bg-white p-4 rounded-lg shadow-lg relative h-[70%]">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleClose}
            >
              &times;
            </button>
            <img
              src={Photo}
              alt="Selected"
              className="max-w-full max-h-full w-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingStudentProfile;
