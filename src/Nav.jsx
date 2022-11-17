import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Products";
import SingleProduct from "./SingleProduct";

function Nav() {
  return (

   <header>
    <nav>
    <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
    </Routes>
    </nav>
   </header>
  
  )
}

export default Nav