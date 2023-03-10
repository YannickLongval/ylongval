import './Icon.css';

function Icon(props) {
  return (
    <a href={props.href} target="blank">
    <div className="bubble">

      <img src={props.isPic ? "./pictures/" + props.name : "./icons/" + props.name} className={props.isPic ? "Picture" : "Icon"}/>
        
    </div>
    </a>
  );
}

export default Icon;
