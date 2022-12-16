import React from "react";
import "./movieInterface.css";
import img from '../../assets/cinema.jpg'

const movieInterface = (props) => {
  return (
    <div className="movieinterface">
      <img src={props.image} alt="movie" className="image" />
      <div className="middle">
        <div className="text">{props.title}</div>
      </div>
    </div>
  );
};

export default movieInterface;
