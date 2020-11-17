import './App.scss';
import Timer from './Timer';
import Credits from './Credits';
import hourglass from './images/hourglass.gif';


function App() {
  return (
    <div id="timer">
      <img src={hourglass} alt="hourglass" />
      <Timer />
      <Credits />
    </div>
  );
}

export default App;
