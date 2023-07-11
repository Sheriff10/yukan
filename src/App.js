import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Intro from './components/intro';
import About from './components/about';
import Card from './components/card';
import Tokenomics from './components/tokenomics';
import Roadmap from './components/roadmap';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Card />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;
