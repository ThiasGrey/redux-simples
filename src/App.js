import './App.css';
import Cartao from './components/Card';
import Intervalo from './components/Intervalo'

function App() {
  return (
    <div className="App">
      <h1>Exercicio React - Redux</h1>

      <div className='linha'>
        <Intervalo></Intervalo>
        
      </div>

      <div className='linha'>
        <Cartao title="Card2" Green>Teste Texto</Cartao>
        <Cartao title="Card3" Blue>Teste Texto</Cartao>
        <Cartao title="Card3" Blue>Teste Texto</Cartao>
        <Cartao title="Card1" Red>Teste Texto</Cartao>
        <Cartao title="Card2" Green>Teste Texto</Cartao>
      </div>

    </div>
  );
}

export default App;
