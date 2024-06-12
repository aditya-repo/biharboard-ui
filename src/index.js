import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './pages/Dashboard';
import PendingReview from './pages/PendingReview/PendingReview';
import PendingStudentProfile from './pages/PendingReview/StudentProfile';
// import ReportsPage from './pages/Reports/Reg9';
import PendingStudent from './pages/PendingReview/PendingStudent';
import SchoolList from './pages/SchoolList/SchoolList';
import RawDataSchoolWise from './pages/Rawdata/RawSchoolData';
import RawStudentData from './pages/Rawdata/RawStudentData';
import StudentListPage from './pages/StudentProfile/studentList';
import StudentProfile from './pages/StudentProfile/StudentProfile';
import SchoolStudentListPage from './pages/SchoolList/studentList';
import RawdataStudentProfile from './pages/Rawdata/StudentProfile';
// import Report from './pages/test';
// import GeneratePdf from './pages/test2';
// import Users from './pages/Users';
// import DummyRegcard9 from './pages/Reports/DummyRegcard9';
import ApplicationForm from './pages/Reports/ApplicationForm';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Dashboard />} />
      <Route path='scanned-form' element={<PendingReview/>}/>
      <Route path='pending-review' element={<PendingReview/>}/>
      <Route path='pending-review/students/:userid' element={<PendingStudentProfile />}/>
      <Route path='pending-review/:id' element={<PendingStudent/>}/>
      <Route path='students' element={<StudentListPage />}/>
      <Route path='schools' element={<SchoolList />}/>
      <Route path='school/student/:id' element={<SchoolStudentListPage />}/>
      <Route path='student/:id' element={<StudentProfile />}/>
      <Route path='reports' element={<ApplicationForm />}/>
      <Route path='raw-schoollist' element={<RawDataSchoolWise />}/>
      <Route path='raw-studentlist/:id' element={<RawStudentData />}/>
      <Route path='raw-studentprofile/:id' element={<RawdataStudentProfile />}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
