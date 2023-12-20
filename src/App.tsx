import './App.css';
import FAQs from './components/accordion';

function App() {
  return (
    <div className="App">
      <main>
        <div className='faqs-container'>
        <FAQs />
        </div>
      </main>
      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'>Frontend Mentor</a>.
        Coded by <a href="https://github.com/RenMari5/">Ren Paczkowski</a>.
      </footer>
    </div>
  );
}

export default App;
