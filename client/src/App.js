import './App.scss';
import Introduction from './components/Introduction/Introduction';

function App() {
  return (
    <div className="App">
      <section id='Home'>
        <Introduction/>
      </section>
      <section id='Projects'>sec2</section>
      <section id='Work'>sec3</section>
      <section id='Resume'>sec4</section>
      <section id='Coding & Socials'>sec5</section>
    </div>
  );
}

export default App;
