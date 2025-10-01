import logo from '../logo.svg';
import '../styles/App.css';
import MyForm from '../form';
import { useHistory } from 'react-router-dom';


function App() {

const history = useHistory();

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => history.push('/')}>
        <img src={logo} className="App-logo" alt="logo" />
</button>
        <p className='App-body'>
         <MyForm />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
