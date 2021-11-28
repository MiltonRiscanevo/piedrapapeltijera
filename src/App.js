import './App.css';
import ButtonsGame from './components/ButtonsGame';


function App() {
  return (
    <div className="container">
      <h1>ROCK PAPER SCISSORS</h1>
      <div id='result'> 
        <div className="start-text">
          Escoje una opcion para empezar
        </div>
      </div>      
      <ButtonsGame/>
      <footer >
        Made from Milton Riscanevo
        <br/>
        by Probabilidad y estadistica
      </footer>
    </div>
  );
}

export default App;
