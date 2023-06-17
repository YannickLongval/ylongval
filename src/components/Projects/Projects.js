import './Projects.css';
import Project from './Project/Project';

function Projects() {
  return (
    <div className="Projects" id="projects">
        <h1>Projects</h1>
        {/* <Project name="fitAI.png" href="https://github.com/YannickLongval/AIFit" title="Canadian Employment Rate Visualization" tech = "Pandas, Numpy, Tableau">
        This dashboard displays historical data about the Employment rate in Canada based of various factors like Province and gender.
        </Project> */}
        <Project name="ASLTranslator.png" href="https://github.com/YannickLongval/ASLTranslator" title="ASLTranslator" tech = "Tensorflow, OpenCV, OpenAI">
        ASLTranslator reads ASL characters from the webcam to generate words, which can then be translated into various languages. 
        </Project>
        {/* <Project name="fitAI.png" href="https://github.com/YannickLongval/AIFit" title="FinSense" tech = "Pandas, Numpy, TensorFlow">
        FinSense scrapes financial news headlines from a website, and classify's the sentiment of each headline as positive or negative.
        </Project> */}
        <Project name="fitAI.png" href="https://github.com/YannickLongval/AIFit" title="FitAI" tech = "Pandas">
        FitAI recommends exercises to the user, depending on which muscle group the user would like to exercise.
        </Project>
        <Project name="applicationForm.png" title="UofTHacks Application Form" tech = "React.js, Next.js, REST API">
        An application form for UofTHacks X. After the user completes the form, the information is collected and sent to a database.
        </Project>
    </div>

  );
}

export default Projects;
