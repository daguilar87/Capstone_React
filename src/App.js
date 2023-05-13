import "./styles/globals.css"
import Navbar from "./components/Navbar";
import HomeView from "./views/HomeView";
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router } from "react-router-dom";
import Footer from './components/Footer'
import Contact from "./views/Contact";
import Aboutus from "./views/Aboutus"
import Services from "./views/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <div className="App">

          <Routes>
            <Route children path='/' element={<HomeView />} />
            <Route children path="/contact" element={<Contact />} />
            <Route children path="/services" element={<Services />} />
            <Route children path="/aboutus" element={<Aboutus />} />
          </Routes>

        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
