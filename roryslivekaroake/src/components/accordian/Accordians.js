import React, { useState } from "react";
import Papa from 'papaparse'
import "./accordian.css"
import playlist1 from "../../assets/photos/playlist-mostrecent.png"
import playlist2 from "../../assets/photos/playlist-bangers.png"
import playlist3 from "../../assets/photos/playlist-aussie.png"
import playlist4 from "../../assets/photos/playlist-duets.png"

const CsvDisplay = ({ csvData }) => {
  return (
    <div className="accordian__content">
      {csvData.map((item, idx) => (
        <div key={idx} className="accordian__item">
          <img src={item.Cover} className="album__cover" alt=""/>
          <div className="song__info">
            <div id="song__title">{item.Title}</div>
            <div id="song__artist">{item.Artist}</div>
          </div>
        </div>
      ))}
    </div>
  );
};


const Accordian = () => {
  const imageInfo = [
    {src: playlist1, csv: 'playlist-mostrecent.csv'},
    {src: playlist3, csv: 'playlist-aussie.csv'},
    {src: playlist2, csv: 'playlist-bangers.csv'},
    {src: playlist4, csv: 'playlist-duets.csv'}
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [csvData, setCsvData] = useState([]);

  const handleImageClick = (index, csvFilePath) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
      Papa.parse(csvFilePath, {
        download: true,
        header: true,
        complete: (result) => {
          setCsvData(result.data);
        }
      });
    } 
    else {
      setActiveIndex(null);
      setCsvData([])
    }
  }

  return (
    <section id="accordian">
      <div className="accordian__sections">
        {imageInfo.map((info, index) => (
          <img
            src={info.src}
            alt={`Image ${index}`}
            onClick={() => handleImageClick(index, info.csv)}
            // className={`image ${activeIndex === index ? 'active': '' }`}
            // className="accordian__image"
            className={`accordian__image ${activeIndex === index ? 'active__image' : ''}`}
            />
            ))}
      </div>
        <CsvDisplay csvData={activeIndex !== null ? csvData: []} />
    </section>
  )
};

export default Accordian;
