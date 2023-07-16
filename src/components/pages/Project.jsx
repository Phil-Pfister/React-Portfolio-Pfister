import works from './works'
import Portfolio from './Portfolio'

// maps over portfolio component adding props to each entry
//Exported to Navigation component for rendering

export default function Project() {
    
    return <div className="row d-flex justify-content-around port-con">
            <div className="text-center pt-3">
                <h2>Projects</h2>
                <h4>Click on an image to visit the deployed site or the GitHub icon to see the repo</h4>
            </div>
            {works.map((work) => <Portfolio 
                key={work.id}
                name={work.name}
                image={work.image}
                gitLink={work.gitLink}
                url={work.url}
                alt={works.alt}
            />)}</div>
}