import React from "react"
import Nav from "./components/nav/Nav"
import Landing from "./components/landing/Landing"
import Gallery from "./components/gallery/Gallery"
// import Carousel from "./components/carousel/Carousel"
import CalendarEvents from "./components/calendar/CalendarEvents"
import Accordian from './components/accordian/Accordians.js' 
import Search from './components/search/Search.js'
import Request from "./components/request/Request"
import "./App.css"
import "./index.css"

var PLAYLIST_URL = "https://docs.google.com/spreadsheets/d/1oLJZRqhh3isarsffJC5RO6z-MYc7kjZCKwvuAF0IirQ/gviz/tq?tqx=out:csv";

function App() {
  return (
    <div>
      <Nav />
      <div className="fadeInUp">
        <Landing />
        <Gallery />
        {/* <Carousel /> */}
        <Accordian />
        <Search />
        <CalendarEvents />
        <Request />
      </div>
    </div>
  );
}

export default App;
