import './App.css';
import { Route, Switch, Routes} from 'react-router-dom';
import ContactForm from './components/contactForm';
import Navbar from "./components/Navbar"
import Navbar2 from './components/Navbar2';
import About from './Pages/About';
import LandingPage from './Pages/landingPage';

function App() {
  return (
    <div className="App">
      <Routes> 
        <Route exact path ="/" element={<About/>}/>
      </Routes>
     {/* <Navbar/>
     <LandingPage/>
     <Navbar2/> */}
     {/* <About/> */}
     {/* <ContactForm/> */}
    </div>
  );
}

export default App;
