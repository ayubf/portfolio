import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import HomePage from "./components/HomePage";
import {useState, useEffect} from 'react';
import Post from "./components/Post";
import Posts from "./components/Posts";
import Projects from "./components/Projects";
import Footer from "./components/subcomponents/Footer";
import TopBar from "./components/subcomponents/TopBar";


import './static/css/style.css'

const App = () => {


  let [postData, setPostData] = useState([]);

  useEffect(() => {
    const loadContent = async () => {
      await fetch("https://ayubfarah.herokuapp.com/posts", {
        method: "GET",
        headers : {
          "Content-type": "application/json"
        }
      })
      .then(res => res.json())
      .then(data => setPostData(data))
    }

    loadContent()
  }, [])


  return (
    <div className="App">
      <TopBar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/projects" element={<Projects />} />
          {
              postData.map(({titleURL}) => {
                return (
                  <Route path={"/posts/"+titleURL+"/"} key={titleURL} element={<Post title={titleURL} />} />
                )
              })
          }
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
