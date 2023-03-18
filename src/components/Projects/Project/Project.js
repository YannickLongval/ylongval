import './Project.css';

function Project(props) {
  return (
    <div className="project">
        {props.left && (
            <a href={props.href} target="blank">
                <img src={"./pictures/" + props.name} className="projectImg"/>
            </a>
        )}
        <div className='projectInfo'>
            <h2>{props.title}</h2>
            <p>{props.children}</p>
            <p><b>Techologies:</b> {props.tech}</p>
        </div>
        {props.right && (
            <a href={props.href} target="blank">
                <img src={"./pictures/" + props.name} className="projectImg"/>
            </a>
        )}
    </div>
  );
}

export default Project;
