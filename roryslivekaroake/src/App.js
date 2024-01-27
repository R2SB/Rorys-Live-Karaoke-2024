import React from "react"
import Nav from "./components/nav/Nav"
import Landing from "./components/landing/Landing"
import Gallery from "./components/gallery/Gallery"
// import Carousel from "./components/carousel/Carousel"
import Accordian from './components/accordian/Accordians.js' 
import Search from './components/search/Search.js'
import Request from "./components/request/Request"
import "./App.css"
import "./index.css"


function App() {
  return (
    <div className="fadeInUp">
      <Nav />
      <Landing />
      <Gallery />
      {/* <Carousel /> */}
      <Accordian />
      <Search />
      <Request />
    </div>
  );
}

export default App;
