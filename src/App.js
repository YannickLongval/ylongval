import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Welcome from './components/Welcome/Welcome';
import Projects from './components/Projects/Projects';
import About from './components/About/About';

function App() {
  return (
    <>
    <NavBar/>
    <Home/>
    <Welcome/>
    <About/>
    <Projects/>
    </>
  );
}

export default App;
