import './About.css';
import Icon from '../Icon/Icon';

function About() {
  return (
    <div className="About" id="about">
        <div className='aboutInfo'>
            <h1>About Me</h1>
            <p>As a lifelong learner, I enjoy trying new things and understanding as much as I can about anything I come across. Right now my interests lie in artificial intelligence, automation, and financial trading.</p>
            <p>I am currently studying at the University of Toronto, with a double major in Computer Science and Economics.</p>
            <p>My hobbies include swimming, working out, and learning new languages.</p>
            <p>Click on the icons to learn more about me :&#41;</p>
            <div className="Icons">
                <Icon href="https://www.linkedin.com/in/yannick-longval/" name="linkedin.png"/>
                <div className='centerIcon'>
                    <Icon name="YLHandstand.PNG" isPic={true}/>
                </div>
                <Icon href="https://github.com/YannickLongval" name="github.png"/>
            </div>
        </div>
    </div>
  );
}

export default About;
