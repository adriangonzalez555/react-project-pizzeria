import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// fucncion principal
function App() {
  return (
  // Router for the app to navigate between pages
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/menu' element={<Menu />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
   </Router>
  </div>
  ); 
}

export default App;
