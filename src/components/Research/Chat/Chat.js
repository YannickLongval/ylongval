import './Chat.css';

function Chat(props) {
  return (
    <div className="chat">
        <img src={"./icons/" + props.name} className="chatIcon"/> 
        <p>{props.children}</p>
    </div>
  );
}

export default Chat;
