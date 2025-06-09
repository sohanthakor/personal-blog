import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Post from './Pages/Post';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import BackToTop from './Components/BackToTop';
import Projects from './Pages/Projects';
import BlogDetail from './Pages/BlogDetail';

function App() {
  return (
    <div className="App">
       
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Post/:id" element={<Post />} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/blog/:id' element={<BlogDetail/>} />
      </Routes>
      <Footer/>
      <BackToTop/>
   
      
    {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App; 

{/*import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Post from './Pages/Post';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Post/:id" element={<Post />} />
      </Routes>
    </Router>
  );
}
*/}
