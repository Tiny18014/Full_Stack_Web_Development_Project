import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUpForm from './SignUpForm'; // Adjust the import path as needed
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login';
import Home from './Home';
import VolunteerSignUp from './VolunteerSignUp';
import OrganizerSignIn from './OrganizerSignIn';
import VolunteerSignIn from './VolunteerSignIn';
import Explore from './Explore';
import Register from './Register';
import SignIn from './SignIn';
import ContactPage from './Contact';
import AboutPage from './About';
import OrganizerDashboard from './OrganiserDashboard';
import VolunteerDashboard from './VolunteerDasboard';
import Test from './test';


function App() {
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  console.log('Current UserName state:', userName);
  
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/registerOrganizer' element={<SignUpForm />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/registerVolunteer' element={<VolunteerSignUp />}></Route>
        <Route path='/volunteerLogin' element={<VolunteerSignIn setUserName={setUserName} setUserId={setUserId} />} />
        <Route path="/organizerLogin" element={<OrganizerSignIn setUserName={setUserName} />} />

        <Route path='/home' element={<Home />} ></Route>
        <Route path='/Explore' element={<Explore />} ></Route>
        <Route path='/SignIn' element={<SignIn />} ></Route>
        <Route path='/contact' element={<ContactPage />} ></Route>
        <Route path='/about' element={<AboutPage />} ></Route>
        <Route path='/organizerDashboard' element={<OrganizerDashboard key={userName} userName={userName}/>} ></Route>
        <Route path='/volunteerDashboard' element={<VolunteerDashboard key={userName} userName={userName} userId={userId} />} />
        <Route path='/test' element={<Test />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

