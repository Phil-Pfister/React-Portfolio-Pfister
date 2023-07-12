// import React from 'react';
import { useState } from 'react';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Header from './Header';
import Footer from "./Footer"
import works from './pages/works'

function Project() {
    const [currentPage, setCurrentPage] = useState('About Me');

    const renderPage = () => {
        if (currentPage === 'Portfolio') {
            return <div className="row justify-content-around port-con">{works.map((work) => <Portfolio 
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