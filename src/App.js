import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My Portfolio Site is under development
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e)=>e.preventDefault()}
        >
          🎉😚🤗
        </a>
      </header>
    </div>
  );
}

export default App;
