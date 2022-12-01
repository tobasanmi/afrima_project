import './App.css';
import { Route, Switch, Routes} from 'react-router-dom';
import ContactForm from './components/contactForm';
import Navbar from "./components/Navbar"
import Navbar2 from './components/Navbar2';
import About from './Pages/About';
import LandingPage from './Pages/landingPage';
import Event from './Pages/Event';
import Signup from './Pages/signUp';

function App() {
  return (
    <div className="App">
      <Routes> 
        <Route exact path ="/" element={<About/>}/>
        <Route exact path ="/events" element={<Event/>}/>
        <Route exact path ="/register" element={<Signup/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
