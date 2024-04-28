import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Welcome from './components/Welcome/Welcome';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Research from './components/Research/Research'

function App() {
  return (
    <>
    <NavBar/>
    <Home/>
    <Welcome/>
    <About/>
    <Research/>
    <Projects/>
    </>
  );
}

export default App;
