import './App.css';
import Cartao from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Exercicio React - Redux</h1>

      <div className='linha'>
        <Cartao title="Card1" Red>Teste Texto</Cartao>
        <Cartao title="Card2" Green>Teste Texto</Cartao>
        <Cartao title="Card3" Blue>Teste Texto</Cartao>
      </div>

      <div className='linha'>
        <Cartao title="Card3" Blue>Teste Texto</Cartao>
        <Cartao title="Card1" Red>Teste Texto</Cartao>
        <Cartao title="Card2" Green>Teste Texto</Cartao>
      </div>

    </div>
  );
}

export default App;
