import "./App.css";
import React from 'react';
import Header from "./Component/Layout/Header/Header";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import WebFont from "webfontloader";
import Footer from "./Component/Layout/Footer/Footer";
import Home from "./Component/Home/Home";
import Loader from "./Component/Layout/Loader/Loader";
import ProductDetails from "./Component/Product/ProductDetails.js"
import Products from "./Component/Product/Products";
import Search from "./Component/Product/Search";

function App() {
React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

  },[]);
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/products/:keyword" element={<Products/>}/>
      </Routes>
      
      <Footer/>
    </Router>
  )
}
export default App