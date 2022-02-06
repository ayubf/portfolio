import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import HomePage from "./components/HomePage";
import Projects from "./components/Projects";
import Footer from "./components/subcomponents/Footer";
import TopBar from "./components/subcomponents/TopBar";


import './static/css/style.css'

const App = () => {


  return (
    <div className="App">
      <TopBar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
