import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './modules/home';
import Contact from './modules/contact';
import About from './modules/about';
import Nav from './navbar';
import Footer from './footer';

function App() {
  return (
    <div className="App">
  

      <BrowserRouter>
      <Nav></Nav>
      
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contac' element={<Contact></Contact>}></Route>
      </Routes>
<Footer></Footer>
      </BrowserRouter>
 


  
    </div>
  );
}

export default App;
