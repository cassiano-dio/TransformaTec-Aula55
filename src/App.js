import './App.css';
import HelloWorld from './components/HelloWorld';
import Car from './components/Car'
import PersonRegister from './components/PersonRegister'
import GameScore from './components/GameScore';

function App() {
  return (
    <div className="App">
      <HelloWorld name="Cassiano" />
      <Car owner="Cassiano Pé de Chumbo q leva multa toda hora"/>
      <PersonRegister name="Cassiano" age={32} lastName="Peres" job="Dev" />
      <GameScore points={0}/>
    </div>
  );
}

export default App;
