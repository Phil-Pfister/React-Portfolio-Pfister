// import React from 'react';
import { useState } from 'react';
import AboutMe from './pages/AboutMe';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Header from './Header';
import Footer from './Footer';


function Navigation() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'Portfolio') {
            return <Project />
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

export default Navigation;