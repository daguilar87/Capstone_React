import "./styles/globals.css"
import Navbar from "./components/Navbar";
import HomeView from "./views/HomeView";
import { Routes, Route} from 'react-router-dom'
import { BrowserRouter as Router } from "react-router-dom";
import Footer from './components/Footer'
import Contact from "./views/Contact";
import Aboutus from "./views/Aboutus"

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
      <Route children path='/' element={<HomeView />} />
      <Route children path="/contact" element={<Contact />} />
      <Route children path="/aboutus" element={<Aboutus />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
