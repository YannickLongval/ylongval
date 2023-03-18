import './Projects.css';
import Project from './Project/Project';

function Projects() {
  return (
    <div className="Projects" id="projects">
        <h1>Projects</h1>
        <Project left name="fitAI.png" href="https://github.com/YannickLongval/AIFit" title="FitAI" tech = "Pytorch, OpenCV, Pandas">
        A fitness application to help beginners start their fitness journey. FitAI recommends exercises to the user, depending on the targeted muscle group. The app also uses computer vision to track the number of repetitions the user performs. 
        </Project>
        <Project right name="applicationForm.png" title="UofTHacks X Projects" tech = "React.js, Next.js, REST">
        An application form and QR-code scanner for UofTHacks X. The appplication form dynamically reads question data from a JSON file to generate the form for hackers to fill out. The QR-code scanner uses react-qr-reader to detect QR-codes, and extract information from them. 
        </Project>
    </div>
  );
}

export default Projects;
