import './Welcome.css';
import Icon from '../Icon/Icon';

function Welcome() {
  return (
    <div className="Welcome" id="welcome">
        <div className="greeting">
        <h1>Hello, Salut, 你好</h1>
        <p>Welcome to my personal website. Here you will find a bit about myself, as well as some highlighted projects that I have done &#40;although if you would like a more exhaustive list of my projects, I suggest you go check out my <a href="https://github.com/YannickLongval" target="blank">GitHub</a>&#41;.</p>
        </div>
        {/* <div className="Icons">
            <Icon name="YLHandstand.PNG" isPic={true}/>
            <Icon href="https://www.linkedin.com/in/yannick-longval/" name="linkedin.png"/>
            <Icon href="https://github.com/YannickLongval" name="github.png"/>
            <Icon name="YLStanding.jpg" isPic={true}/>
        </div> */}
    </div>
  );
}

export default Welcome;
