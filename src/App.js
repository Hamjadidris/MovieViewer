import mytestapp from './assets/MyTestApp.svg'
import './App.css';
import Movies from './components/Movies/Movies';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <img src={mytestapp} alt='logo'/>
        </nav>
      </header>

      <section>
          <div className='intro'>
            <h1>
            Watch something incredible.
            </h1>
          </div>
      </section>

      <Movies />
    </div>
  );
}

export default App;
