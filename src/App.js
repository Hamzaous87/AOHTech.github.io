import React from 'react';
import GlobalStyle from './GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import Services from './Pages/Services/Sevices';
import Products from './Pages/Products/Product';
import SignUp from './Pages/SignUp/Signup';

import { Navbar, Footer} from './Components';
import ScrollToTop from './Components/ScrollToTop';



function App() {
  return (
    <Router>
      <GlobalStyle/>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path= '/' element={<Home />} />
        <Route path= '/services' element={<Services />} />
        <Route path= '/products' element={<Products />} />
        <Route path= '/sign-up' element={<SignUp />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
