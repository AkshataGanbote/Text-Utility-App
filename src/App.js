import './App.css';
import {useState} from 'react'
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Footer from './components/Footer';

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
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="container"> 
        <TextForm theme={theme}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

// Index.css & App.css -> removed completely
