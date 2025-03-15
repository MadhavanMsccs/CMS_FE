  import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
  import Home from "../src/components/Home"
  import ChooseUser from "../src/components/ChooseUser"
  import AdminRegister from "./components/AdminRegister";
  import Contact from "./pages/Contact";
  import Teacherspage from "./pages/teacher2";
  import PostGradCard from "./pages/Postgraduation";
  import ImageSlider from "./components/eventphoto";
  import MScCSCourseOutcomes from "./pages/Msc";
  import MCAProgram from "./pages/mca";
  import MBACourseOutcome from "./pages/mba"
  import MicrobiologyCourseOutcomes from "./pages/microBiology"
  import EnglishCourseOutcomes from "./pages/english"
  import UGProgram from "./pages/ug";

  //dashboard-import
  import AdminDashboard from "./pages/Admin/Dashboard";
  import StudentDashboard from './pages/Students/Dashboard';
  import TeacherDashboard from "../src/pages/Teachers/Dashboard";

  //import admin section
  import Classes from "./pages/Admin/Classes";
  import Exam from "./pages/Admin/Exam";
  import Attendance from "./pages/Admin/Attendance";
  import Perfromance from "./pages/Admin/Performance";
  import Teachers from "./pages/Admin/Teachers";
  import Students from "./pages/Admin/Students";
  import Assignments from "./pages/Admin/Assignments";
  import Library from "./pages/Admin/Library";
  import EventCalender from "./pages/Admin/EventCalender";
  import SettingsProfile from "./pages/Admin/SettingsProfile";
  import Announcement from "./pages/Admin/Announcement";

  //import student section
  import StudentAssignments from "./pages/Students/Assignments";
  import ExamSection from "./pages/Students/Exams";
  import PerfromanceSection from "./pages/Students/Performance";
  import AttendanceSection from "./pages/Students/Attendance";
  import LibrarySection from "./pages/Students/Library";
  import AnnouncementSection from "./pages/Students/Announcement";
  import ProfileSection from "./pages/Students/Profile";

  //import teacher section
  import ClassSection from '../src/pages/Teachers/Classes';
  import StudentSection from '../src/pages/Teachers/Students';
  import TeacherSection from '../src/pages/Teachers/Teachers';
  import CheckPerformanceSection from '../src/pages/Teachers/Performance';
  import EventSection from '../src/pages/Teachers/Events';
  import TeacherProfileSection from '../src/pages/Teachers/Profile';
  import CheckAnnouncementSection from '../src/pages/Teachers/Announcement';
  import AssignmentSection from '../src/pages/Teachers/Assignments';
  import CheckAttendanceSection from '../src/pages/Teachers/Attendance';
  import CheckExamSection from '../src/pages/Teachers/Exams';
  import ProvideExamMarks from "./pages/Teachers/Providemarks";

  import Fees from "./pages/Students/fees"
  




  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/choose-user" element={<ChooseUser/>}/>
          <Route path="/student/fees" element={<Fees/>}/>

          <Route path="/contact" element={<Contact/>}/>
          <Route path="/teachers-page" element={<Teacherspage/>}/>
          <Route path="/pg-page" element={<PostGradCard/>}/>
          <Route path="/eventconducted" element={<ImageSlider/>}/>
          <Route path="/Msccs" element={<MScCSCourseOutcomes/>}/>
          <Route path="/MCA" element={<MCAProgram/>}/>
          <Route path="/mba" element={<MBACourseOutcome/>}/>
          <Route path="/micro" element={<MicrobiologyCourseOutcomes/>}/>
          <Route path="/english" element={<EnglishCourseOutcomes/>}/>
          <Route path="/ugoutcome" element={<UGProgram/>}/>


          {/* Login-Routes */}
          {/* <Route exact path='/admin-signin' element={<AdminSignIn/>}/>
          <Route exact path='/student-signin' element={<StudentSignIn/>}/>
          <Route exact path='/teacher-signin' element={<TeacherSignIn/>}/> */}

          <Route exact path="/admin-register" element={<AdminRegister />} />

          {/* Admin-routes */}
          <Route exact path='/admin/dashboard' element={<AdminDashboard/>}/>
          <Route exact path='/student/dashboard' element={<StudentDashboard/>}/>
          <Route exact path='/teacher/dashboard' element={<TeacherDashboard/>}/>
        
          {/* Admin-section */}
          <Route exact path='/admin/classes' element={<Classes/>}/>
          <Route exact path='/admin/exams' element={<Exam/>}/>
          <Route exact path='/admin/attendance' element={<Attendance/>}/>
          <Route exact path='/admin/performance' element={<Perfromance/>}/>
          <Route exact path='/admin/teachers' element={<Teachers/>}/>
          <Route exact path='/admin/students' element={<Students/>}/>
          <Route exact path='/admin/assignments' element={<Assignments/>}/>
          
          <Route exact path='/admin/library' element={<Library/>}/>
          <Route exact path='/admin/events' element={<EventCalender/>}/>
          <Route exact path='/admin/settings' element={<SettingsProfile/>}/>
          <Route exact path='/admin/communication' element={<Announcement/>}/>


          {/* Student-section */}
          <Route exact path='/student/assignments' element={<StudentAssignments/>}/>
          <Route exact path='/student/exams' element={<ExamSection/>}/>
          <Route exact path='/student/performance' element={<PerfromanceSection/>}/>
          <Route exact path='/student/attendance' element={<AttendanceSection/>}/>
          <Route exact path='/student/library' element={<LibrarySection/>}/>
          <Route exact path='/student/communication' element={<AnnouncementSection/>}/>
          <Route exact path='/student/settings' element={<ProfileSection/>}/>

          {/* Teacher section */}
          <Route exact path="/teacher/classes" element={<ClassSection />} />
          <Route exact path="/teacher/students" element={<StudentSection />} />
          <Route exact path="/teacher/teachers" element={<TeacherSection />} />
          <Route exact path="/teacher/assignments" element={<AssignmentSection />} />
          <Route exact path="/teacher/exams" element={<CheckExamSection />} />
          <Route exact path="/teacher/performance" element={<CheckPerformanceSection />} />
          <Route exact path="/teacher/attendance" element={<CheckAttendanceSection />} />
          <Route exact path="/teacher/communication" element={<CheckAnnouncementSection />} />
          <Route exact path="/teacher/events" element={<EventSection />} />
          <Route exact path="/teacher/settings" element={<TeacherProfileSection/>} />
          <Route exact path="/teacher/providemarks" element={<ProvideExamMarks/>} />

        </Routes>
      </Router>
    );
  }

  export default App;
