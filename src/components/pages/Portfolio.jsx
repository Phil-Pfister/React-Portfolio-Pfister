/* eslint-disable react/prop-types */
// import React from "react";



export default function Portfolio(props) {
    
    return <div className="col-sm-4">
        <div className="card port-card">
        <img className="card-img-top" src={props.image} alt={props.alt}></img>
        <div className="card-body">
        <a href={props.url}><h2 className="card-title">{props.name}</h2></a>
       
        <a className="btn m-1" href={props.gitLink}><i className="bi bi-github"></i></a>
        </div>
        </div>
        </div>
    


}