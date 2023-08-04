// import logo from './logo.svg';
import './App.css';
import Navbar from './pages/navbar';
import Hero from './pages/hero';
import About from './pages/about';
import Donetpart from './pages/donatpart';
import Boxpart from './pages/boxpart';
import Footer from './pages/footer';

function App() {
  return (
      <div>
          <div>
       <Navbar />
        <Hero/>
        <About/>
        <Donetpart/>
        <Boxpart/>
        <Footer/>
      </div>
      </div>
  );
}

export default App;
