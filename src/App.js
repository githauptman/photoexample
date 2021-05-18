import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div class='lr_embed' style='position: relative; padding-bottom: 50%; height: 0; overflow: hidden;'><iframe id='iframe' src='https://lightroom.adobe.com/embed/shares/fe55b27d71c341b1b14edfbf39028301/slideshow?background_color=%232D2D2D&color=%23999999' frameborder='0'style='width:100%; height:100%; position: absolute; top:0; left:0;' ></iframe></div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
