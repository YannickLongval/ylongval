import './Icon.css';

function Icon(props) {
  return (
    <a href={props.href} target="blank">
    <div className="Icon">
        <img src={"./icons/" + props.name}/>
    </div>
    </a>
  );
}

export default Icon;
