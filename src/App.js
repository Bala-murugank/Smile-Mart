import Header from "./Componets/Header/Header";
import { Routes,Route } from "react-router-dom";
import Home from './Componets/Home/Home'
import Product from './Componets/Product/Product'
import Employee from './Componets/Employee/Employee'
import Login from './Componets/Login/Login'
import Cart  from "./Componets/Cart/Cart";
import Footer from './Componets/Footer/Footer'
import ProductInfo from "./Componets/Product/ProductInfo";
//import { ToastContainer } from 'react-toastify';
import './App.css'
import React, { useState } from "react";
export const serchContext = React.createContext()
 
function App() {
  const [search, setSerach] = useState('')
  
  return (
    <div className="APP">
    <>
    <Header search={setSerach} />
    </>
    
    <>
    <Routes>
       <Route path={'/'} element={<Home />}/>
       <Route path={'/products'} element={
        <serchContext.Provider value={search}>
           <Product />
        </serchContext.Provider>
       }/>
       <Route path={'/products/:id'} element={<ProductInfo />} />
       <Route path={'/employee'} element={<Employee />}/>
       <Route path={'/cart'} element={<Cart />}/>
       <Route path={'/login'} element={<Login />}/>
    </Routes>
    </>
    <>
    <Footer />
    </>
     
      
     
    </div>
  );
}

export default App;
