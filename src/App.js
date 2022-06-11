
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './widgets/back2top';
import Contact from './components/contact';
import About from './components/about';
import Education from './components/education';
import Portfolio from './components/Portfolio';
import MyStacks from './components/mystacks';


function App() {
  return (
    <>
     <Header/>
     <About/>
     <MyStacks/>
     <Education/>
     <Portfolio/>
     <Contact/>
     <BackToTop/>
     <Footer/>
    </>
  );
}

export default App;
