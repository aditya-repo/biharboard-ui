import Sidebar from './components/Sidebar';
import Header from './components/Header';
// import Dashboard from './pages/Dashboard';
// import PendingReview from './pages/PendingReview';
// import PendingStudent from './pages/PendingStudent';
// import EditableTable from './pages/test';
import StudentProfile from './pages/StudentProfile';
import { BrowserRouter as Router } from 'react-router-dom';
import GeneratePdf from './pages/test2'


// import MyTable from './pages/test';
function App() {
  return (
    <Router>

      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
            <GeneratePdf />
        </div>
      </div>
    </Router>
  );
}

export default App;
