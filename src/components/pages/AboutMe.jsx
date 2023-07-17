import image from "../../assets/images/phil-pic.jpg"
export default function AboutMe() {
  return (
    <div className="container-fluid mt-5 d-flex flex-wrap flex-row justify-content-around min-vh-100">
    <div className="text-center about-card">
    {/* about section */}
    <div>
      <h2>About Me</h2>
      <h4 className="lh-lg">
        Welcome to my website! <br/>I started my career in television production in the 90s 
        and have worked for various television stations for 20 years.
        Over that time tv production has gotten more digital and automated 
        and I found myself really drawn to how things worked.
        I took a course at Rice University on full stack web developement and 
        discovered I have a passion for coding. <br/><br/>
        I live in Houston, Texas with my family and our husky mix, Stella.
        I like to hike, fish, play disk golf and solve crossword puzzles. I have a strong work ethic
        and enjoy being part of a dedicated team that is focused on getting results.
       
      </h4>
      </div>
      </div>
      {/* picture */}
      <div className="">
      <img src={image} alt='Photo of me at my desk'></img>
      </div>
      
    </div>
  );
}