import resume from '../../assets/images/Phillip Pfister_Resume2023.pdf'
// resume page
export default function Resume() {

    return <div className="container res-con min-vh-100">
        <h2>Resume</h2>
        <a href={resume} download="Resume"><h3>Click here for PDF</h3></a>
        <h3>Front-end Proficiencies</h3>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        </ul>
    </div>

}