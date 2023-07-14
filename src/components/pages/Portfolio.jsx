/* eslint-disable react/prop-types */




export default function Portfolio(props) {
    
    return <div className="card port-card">
        <a href={props.url}><img className="card-img-top image-size" src={props.image} alt={props.alt}></img></a>
        <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
       
        <a className="btn m-1" href={props.gitLink}><i className="bi bi-github card-icon">GitHub Repo</i></a>
        </div>
        </div>
       
    


}