import logo from './logo.svg';
import './App.css';
import Mole from './Mole.js'
import Molehill from './Molehill.js'
import BothComponents from './BothComponents.js';

function App(props) {
  return (
    <div>
      <h2>Mole Container</h2>
      <Mole />
      <Molehill />
      <BothComponents />
    </div>
  )
}

export default App;
