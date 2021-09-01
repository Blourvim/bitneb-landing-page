import './App.css';
import Title from './components/title/Title';
import LaptopSection from './components/laptopSection/LaptopSection';
import Footer from './components/footer/Footer';
import footerData from './content/texts/footer';
import ButtonSection from './components/button-section/ButtonSection';
function App() {
  return (
    <div className="App">
    <Title/>
    <LaptopSection/>
    <ButtonSection/>
    <Footer content={footerData}/>

    </div>
  );
}

export default App;
