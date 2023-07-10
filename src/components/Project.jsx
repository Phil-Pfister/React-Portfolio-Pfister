// import React from 'react';
import { useState } from 'react';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Header from './Header';

function Project() {
    const [currentPage, setCurrentPage] = useState('About Me');

    const renderPage = () => {
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
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
    </div>
}

export default Project;