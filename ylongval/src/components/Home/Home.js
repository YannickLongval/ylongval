import logo from './../../logo.svg';
import './Home.css';

function Home() {
  return (
    <div className="Home" id="home">
        <div className="blurb">
        <h1>Yannick Longval</h1>
        <h3>creative, innovative, passionate.</h3>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default Home;
