import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './pages/Dashboard';
import PendingReview from './pages/PendingReview';
import StudentProfile from './pages/StudentProfile';
import ReportsPage from './pages/Reports';
import PendingStudent from './pages/PendingStudent';
import SchoolList from './pages/SchoolList';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children:[
//       {
//         path: "",
//         element: <Dashboard />
//       },
//       {
//         path: "pending-review",
//         element: <PendingReview />
//       },
//       {
//         path: "students",
//         element: <StudentProfile />
//       },
//       {
//         path: "reports",
//         element: <ReportsPage />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Dashboard />} />
      <Route path='pending-review' element={<PendingReview/>}/>
      <Route path='pending-review/students' element={<PendingStudent/>}/>
      <Route path='pending-review/students/:userid' element={<StudentProfile />}/>
      <Route path='students' element={<PendingStudent />}/>
      <Route path='schools' element={<SchoolList />}/>
      <Route path='reports' element={<ReportsPage />}/>
    </Route>
  )
)

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Home/>} />
//     </Route>
//   )
// )

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
