import './NavBar.css';

window.addEventListener("scroll", function(){
  var r = document.querySelector(':root')
  if(window.scrollY<=50){
    r.style.setProperty('--background', '#FFF7EF');
    r.style.setProperty('--text', '#2E3840');
  } else {
    r.style.setProperty('--background', '#4E6E81');
    r.style.setProperty('--text', '#FFFBF6');
  }
});

function NavBar() {
  return (
    <div className="navbar">
        <img/>
        <ul className="navbarOptions">
          <li><a href="#welcome">Welcome</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#home">Home</a></li>
        </ul>
    </div>
  );
}

export default NavBar;
