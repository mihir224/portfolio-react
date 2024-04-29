import './App.scss';
import Introduction from './components/Introduction/Introduction';
import Parallax from './components/Parallax/Parallax';
import Projects from './components/Projects/Projects';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <section id='Home'>
        <Introduction/>
      </section>
      <section id='Projects'>
        <Parallax type='1' />
      </section>
      <section id='project-details'>
        <Projects/>
      </section>
      <section id='Work'>
        <Parallax type='2' />
        </section>
      <section id='work-details'><Work/></section>
      <section id='Coding+Socials'>
        <Parallax type='3' />
      </section>
      <section id='cs-details'>
        <Contact/>
      </section>

    </div>
  );
}

export default App;
