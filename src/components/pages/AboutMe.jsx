// import React from 'react';
import image from "../../assets/images/phil-pic.jpg"
export default function AboutMe() {
  return (
    <div className="container row mt-5 min-vh-100 d-flex justify-content-around">
    <div className="card col-6 text-center about-card">
    <div className="card-body">
      <h2 className="card-title">About Me</h2>
      <h4>
        Welcome to my website! I started my career in television production in the 90s 
        and have worked for various television stations for 20 years.
        Over that time tv production has gotten more digital and automated 
        and I found myself really drawn to how things worked.
        I took a course at Rice University on full stack web developement and 
        discovered I have a passion for coding. <br/><br/>
        I live in Houston, Texas with my family and our husky mix, Stella.
        I like to hike, fish, play disk golf and solve crossword puzzles. 
       
      </h4>
      </div>
      </div>
      <div className="col-4">
      <img src={image} alt='Photo of me at my desk'></img>
      </div>
      
    </div>
  );
}