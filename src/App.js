import './App.scss';
import About from './components/about/About'
import Header from './components/header/Header';
import Home from './components/home/Home';
import ContactUs from './components/contact/ContactUs';
import Products from './components/products/Products';
import {
  Routes,
  Route
} from "react-router-dom";
import SingleProductPage from './components/singleProduct/SingleProductPage';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='app-container'>
      <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/about-us' element={<About />} />
          {/* <Route path='/contact-us' element={<ContactUs />} /> */}
          <Route path='/products' element={<Products />} />
          <Route path='/products/:productId' element={<SingleProductPage />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
