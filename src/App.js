import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Welcome from './components/Welcome/Welcome';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <>
    <NavBar/>
    <Home/>
    <Welcome/>
    <Projects/>
    </>
  );
}

export default App;
