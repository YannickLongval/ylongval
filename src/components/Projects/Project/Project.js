import './Project.css';

function Project(props) {
  return (
    <div className="project">
        <div className='projectInfo'>
            <h2>{props.title}</h2>
            <p>{props.children}</p>
            <p><b>Technologies:</b> {props.tech}</p>
        </div>
            <a href={props.href} target="blank">
                <img src={"./pictures/" + props.name} className="projectImg"/> 
            </a>
        </div>
  );
}

export default Project;
