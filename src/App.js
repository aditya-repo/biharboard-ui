import Sidebar from './components/Sidebar';
import Header from './components/Header';
// import Dashboard from './pages/Dashboard';
// import PendingReview from './pages/PendingReview';
// import PendingStudent from './pages/PendingStudent';
// import EditableTable from './pages/test';
import StudentProfile from './pages/StudentProfile';

function App() {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1 flex flex-col">
        <Header />
        <StudentProfile />
      </div>
    </div>
  );
}

export default App;
