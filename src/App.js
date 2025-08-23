import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
 import About from './pages/about';
import Skills from './pages/Skills';
import Education from './pages/Education';
import ContactUs from './pages/ContactUs';
import Blogs from "./pages/Blogs"; 
import Experience from './pages/Experience';
import Footer from './components/Footer';

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
          { <Route path="/blogs" element={<Blogs />} />}
        {  <Route path="/Experience" element={<Experience/>}/>}
        { <Route path="/contact" element={<ContactUs />} /> }
        {/* Add other routes here */}

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
