import Navbar from './Navbar';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Web from './Web'
import Footer from './Footer';
import Services from './Services/Services'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='Services' element={<Services/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
