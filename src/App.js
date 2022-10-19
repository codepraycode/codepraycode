
import Header from './components/Header';
import Footer from './components/Footer';

import About from './components/About';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';


function App() {
  return (
    <>
     <Header id="home"/>
     <About id="about"/>
     <Skills id="skills"/>
     <Education id="education"/>
     <Portfolio id="projects"/>

     <Footer id="contact"/>
    </>
  );
}

export default App;
