import './NavBar.css';

window.addEventListener("scroll", function(){
  var r = document.querySelector(':root')
  if(window.scrollY<=50){
    r.style.setProperty('--background', 'var(--bg-primary)');
    r.style.setProperty('--text', 'var(--text-primary)');
    // r.style.setProperty('--hover', 'var(--text-secondary)');
  } else {
    r.style.setProperty('--background', 'var(--action-primary)');
    r.style.setProperty('--text', 'var(--bg-primary)');
    // r.style.setProperty('--hover', 'var(--bg-lighter)');
  }
});

let state = "light"

let changeMode = () => {
  var r = document.querySelector(':root')
  if(state === "light"){
    state = "dark"
    r.style.setProperty('--text-primary', '#F1F6F9');
    r.style.setProperty('--bg-lighter', '#303d5a');
    r.style.setProperty('--bg-primary', '#394867');
    r.style.setProperty('--bg-darker', '#212A3E');
    r.style.setProperty('--action-primary', '#212A3E');
  } else {
    state = "light"
    r.style.setProperty('--text-primary', '#212A3E');
    r.style.setProperty('--bg-lighter', '#ffffff');
    r.style.setProperty('--bg-primary', '#F1F6F9');
    r.style.setProperty('--bg-darker', '#e3ebef');
    r.style.setProperty('--action-primary', '#394867');
  }
}

function NavBar() {
  return (
    <div className="navbar">
        <button type="button" onClick={changeMode}>CHANGE MODE</button>
        <ul className="navbarOptions">
          <li><a href="#home">Home</a></li>
          <li><a href="#welcome">Welcome</a></li>
          <li><a href="#about">Me</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
    </div>
  );
}

export default NavBar;
