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
import LoginSignUp from "./Component/User/LoginSignUp";
import store from "./store"
import { loadUser } from "./actions/userAction";
import UserOptions from "./Component/Layout/Header/UserOptions"
import { useSelector } from "react-redux";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());

  },[]);
  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/products/:keyword" element={<Products/>}/>

      <Route path="/login" element={<LoginSignUp/>} />

      </Routes>
      
      <Footer/>
    </Router>
  )
}
export default App