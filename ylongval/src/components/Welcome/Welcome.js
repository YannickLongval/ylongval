import './Welcome.css';
import Icon from '../Icon/Icon';

function Welcome() {
  return (
    <div className="Welcome" id="Welcome">
        <div className="greeting">
        <h1>Greetings!</h1>
        <p>Welcome to my personal website. I’m Yannick, an avid computer science student interested in machine learning and automation. During my free time, I like to workout, and learn new things. This website in still under contruction, so in the meantime, you can view my work by clicking on the icons.</p>
        </div>
        <div className="Icons">
            <Icon href="https://www.linkedin.com/in/yannick-longval/"/>
            <Icon/>
            <Icon/>
        </div>
    </div>
  );
}

export default Welcome;
