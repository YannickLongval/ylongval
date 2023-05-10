import './NavBar.css';

window.addEventListener("scroll", function(){
  var r = document.querySelector(':root')
  if(window.scrollY<=50){
    r.style.setProperty('--background', 'var(--bg-primary)');
    r.style.setProperty('--text', 'var(--text-primary)');
  } else {
    r.style.setProperty('--background', 'var(--action-primary)');
    r.style.setProperty('--text', 'var(--bg-lighter)');
  }
});

function NavBar() {
  return (
    <div className="navbar">
        <img/>
        <ul className="navbarOptions">
          <li><a href="#home">Home</a></li>
          <li><a href="#welcome">Welcome</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
    </div>
  );
}

export default NavBar;
