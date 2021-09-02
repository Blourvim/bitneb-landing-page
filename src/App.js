import './App.css';


import Title from './components/title/Title';
import titleData from './content/texts/title';


import LaptopSection from './components/laptopSection/LaptopSection';

import Footer from './components/footer/Footer';
import footerData from './content/texts/footer';


import ButtonSection from './components/button-section/ButtonSection';
import buttonData from './content/texts/button';


function App() {
  return (
    <>
    <div className="App">
      <div id='main'>
    <Title content={titleData}/>
    <LaptopSection/>
    <ButtonSection content={buttonData}/>
    </div>
    </div>

    <Footer id='footer' content={footerData}/>

    </>
  );
}

export default App;
