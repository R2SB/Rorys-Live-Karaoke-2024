import React, { useState } from "react";
import Papa from 'papaparse'
import "./accordian.css"
import recentPng from "../../assets/photos/recent.png"
import bangersPng from "../../assets/photos/bangers.png"
import popularPng from "../../assets/photos/popular.png"
import duetsPng from "../../assets/photos/duets.png"

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
    {src: recentPng, csv: 'recent.csv'},
    {src: popularPng, csv: 'popular.csv'},
    {src: bangersPng, csv: 'bangers.csv'},
    {src: duetsPng, csv: 'duets.csv'}
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
