import './css/App.css';
import Hero from './components/Hero'
import Navbar from './components/Navbar';
import ThreeTails from './components/ThreeTails';
import Mission from './components/Mission';
import Products from './components/Products';
import EmailForm from './components/EmailForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
      </header>
      <Mission/>
      <ThreeTails />
      <div className='App-container'>
        <Products />
      </div>
      <EmailForm />
      <Footer />
    </div>
  );
}

export default App;
