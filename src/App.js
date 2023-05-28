import './App.css';
import {useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Footer from './components/Footer';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  // -- Defined state variables
  const [theme, setTheme] = useState('light'
  )

  // -- Function to change the Theme color

  const toggleTheme = () => {
    if(theme === 'light'){
      setTheme('dark');
      document.body.style.backgroundColor = '#222E35'; // *IMPORTANT* It is JS that's why we have to write colors here & not bootstrap colors like dark, light, primary
    }
    else{
      setTheme('light');
      document.body.style.backgroundColor = 'white'; // #0eabd21c *IMPORTANT* It is JS that's why we have to write colors here & not bootstrap colors like dark, light, primary
    }
  }

  return (
    <>
      <Router>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <div className="container"> 
        <Routes>
            <Route path="/about" element={<About theme={theme}/>} />
            <Route path="/" element={<TextForm theme={theme}/>} />
        </Routes>
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
