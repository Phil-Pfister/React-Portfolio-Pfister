/* eslint-disable react/prop-types */
// header component with links to choose various endpoints
// props to tell Navigation component which page is current based on Navbar link click handler

function Header({ currentPage, handlePageChange }) {
    return <>
      
  <nav className="navbar navbar-expand-lg border-bottom header-look py-5">
    <div className="container-fluid">
    <h1>Phillip Pfister</h1>
    <div>
    <ul className='navbar-nav'>
      <li className='nav-item'>
      <a className={currentPage === 'AboutMe' ?  "nav-link active" : "nav-link header-link"} href="#About Me" onClick={() => handlePageChange('AboutMe')}>About Me</a>
      </li>
      <li className='nav-item'>
      <a className={currentPage === 'Portfolio' ? "nav-link active" : "nav-link header-link"} href="#Portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</a>
      </li>
      <li className='nav-item'>
      <a className={currentPage === 'Contact' ? "nav-link active" : "nav-link header-link"} href="#Contact" onClick={() => handlePageChange('Contact')} >Contact</a>
      </li>
      <li className='nav-item'>
      <a className={currentPage === 'Resume' ? "nav-link active" : "nav-link header-link"} href="#Resume" onClick={() => handlePageChange('Resume')}>Resume</a>
      </li>
      </ul>
      </div>
    </div>
  </nav>

    </>
}

export default Header;