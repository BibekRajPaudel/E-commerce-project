import "./App.css";
import React, { useState,useEffect, Fragment } from "react";
import Header from "./Component/Layout/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import Footer from "./Component/Layout/Footer/Footer";
import Home from "./Component/Home/Home";
import Loader from "./Component/Layout/Loader/Loader";
import ProductDetails from "./Component/Product/ProductDetails.js";
import Products from "./Component/Product/Products";
import Search from "./Component/Product/Search";
import LoginSignUp from "./Component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./Component/Layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./Component/User/Profile";
import ProtectedRoute from "./Component/Route/ProtectedRoute";
import UpdateProfile from "./Component/User/UpdateProfile"
import UpdatePassword from "./Component/User/UpdatePassword";
import ForgotPassword from "./Component/User/ForgotPassword";
import ResetPassword from "./Component/User/ResetPassword";
import Cart from "./Component/Cart/Cart";
import Shipping from "./Component/Cart/Shipping";
import ConfirmOrder from "./Component/Cart/ConfirmOrder";
import axios from "axios";
import Payment from "./Component/Cart/Payment";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);


  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);
  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/search" element={<Search />} />
        <Route path="/products/:keyword" element={<Products />} />

        <Route exact path='/account' element={<ProtectedRoute><Profile /> </ProtectedRoute> }/>
        <Route path='/me/update' element={<ProtectedRoute><UpdateProfile /> </ProtectedRoute> }/>
         <Route path='/password/update' element={<ProtectedRoute><UpdatePassword /> </ProtectedRoute> }/>

         <Route path='/login/shipping' element={<ProtectedRoute><Shipping /> </ProtectedRoute> }/>
         <Route path='/order/confirm' element={<ProtectedRoute><ConfirmOrder /> </ProtectedRoute> }/>
         <Route path='/process/payment' element={<ProtectedRoute><Payment /> </ProtectedRoute> }/>



        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/login" element={<LoginSignUp />} />
      </Routes>

      <Footer />
    </Router>
  );
}
export default App;
