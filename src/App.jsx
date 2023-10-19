import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './screen/Home'
import About from './screen/About';
import Testimonial from './screen/Testimonial';
import Furnitures from './screen/Furnitures';
import ContactUs from './screen/ContactUs';
import Header from './component/Header';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/testimonial" element={<Testimonial />}/>
        <Route exact path="/furniture" element={<Furnitures/>}/>
        <Route exact path="/contactus"/>
      </Routes>
      <ContactUs />
    </BrowserRouter>
  )
}

export default App;
