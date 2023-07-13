// import React from 'react';
import { useState } from 'react';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Header from './Header';
import Footer from './Footer';
import works from './pages/works';

function Project() {
    const [currentPage, setCurrentPage] = useState('About Me');

    const renderPage = () => {
        if (currentPage === 'Portfolio') {
            return <div className="container-fluid row justify-content-around port-con">
            <div className="text-center pt-3">
                <h2>Projects</h2>
                <h4>Click on an image to visit the deployed site or the github icon to see the code</h4>
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
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        
            return <AboutMe />;
        
        
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return <div>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer />
    </div>
}

export default Project;