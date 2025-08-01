import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
 import About from './pages/about';
import Skills from './pages/Skills';
import Education from './pages/Education';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {<Route path="/" element={<Home />} /> }
        <Route path="/about" element={<About />} />
        { <Route path="/skills" element={<Skills />} /> }
        { <Route path="/projects" element={<Projects />} /> }
        { <Route path="/education" element={<Education />} /> }
        { <Route path="/contact" element={<ContactUs />} /> }
        {/* Add other routes here */}
      </Routes>
    </>
  );
}

export default App;
