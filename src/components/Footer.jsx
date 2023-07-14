

function Footer() {
    return <footer className="bg-dark text-center text-white">

    {/* <!-- social icons with links --> */}
    <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/Phil-Pfister"><i className="bi bi-github"></i></a>
    <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/phil.pfister.12"><i className="bi bi-facebook"></i></a>
    <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/phil-pfister-4b75335/"><i className="bi bi-linkedin"></i></a>
    
  
    {/* <!-- Copyright with dynamic date --> */}
    <div className="text-center p-3">
    &copy; {new Date().getFullYear()}
      <a className="text-white" href="https://phil-pfister.github.io/Phillip_Pfister_Portfoilo/"> Phillip Pfister</a>
    </div>
    
  </footer>
}

export default Footer;