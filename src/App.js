
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './widgets/back2top';
import Contact from './components/contact';
import About from './components/About';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';


function App() {
  return (
    <>
     <Header/>
     <About/>
     <Skills/>
     <Education/>
     <Portfolio/>
     <Contact/>
     <BackToTop/>
     <Footer/>
    </>
  );
}

export default App;
