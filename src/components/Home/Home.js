import logo from './../../logo.svg';
import './Home.css';

function Home() {
  return (
    <div className="Home" id="home">
        <div className="blurb">
        <h1>Yannick Longval</h1>
        <h3>creative, dedicated, inspired.</h3>
        </div>
        <img src="./pictures/YLStanding.jpg" className="headshot" alt="logo" />
    </div>
  );
}

export default Home;
