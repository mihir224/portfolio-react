import './App.scss';
import Introduction from './components/Introduction/Introduction';
import Parallax from './components/Parallax/Parallax';
import Projects from './components/Projects/Projects';
import { Tilt } from 'react-tilt';

function App() {
  return (
    <div className="App">
      <section id='Home'>
        <Introduction/>
      </section>
      <section id='Projects'>
        <Parallax/>
      </section>
      <section id='project-details'>
        <Projects/>
      </section>
      <section id='Work'>sec3</section>
      <section id='work-details'>sec3</section>
      {/* <section id='Resume'>sec4</section> */}
      <section id='Coding & Socials'>sec5</section>
      <section id='cs-detials'>sec5</section>

    </div>
  );
}

export default App;
