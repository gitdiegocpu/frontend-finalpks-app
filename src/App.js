
//import Products from "./components/Products";
// import Footer from './components/Footer';
import Home from "./components/Home/Home.js";
import CartContent from "./components/CartContent/CartContent";
import DataProvider from "./components/Context/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function productList() {
  return (
     <DataProvider>
       <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/Cart" element={<CartContent />} />
                </Routes>
                <Home />
       </BrowserRouter>
      </DataProvider>    
   
   )
}

// creating components

