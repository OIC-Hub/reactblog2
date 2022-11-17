import axios from 'axios';
import { useState, useEffect} from 'react';
import Product from './Product';


function Products() {
const[data, setData] = useState('');

useEffect(()=>{
    getProducts()

}, [])

    
const getProducts = async ()=>{
    try{
          const products = await axios.get('https://dummyjson.com/products');
       setData(products.data.products);
}catch(err){
    console.log(err)
}
}
console.log(data)
  return (
    <section className="product-container">
    {data?
    
    data.map((value, index)=>{
    return(
      <Product key={index} products ={value}  />
     )
    }):
    <h2>Loading...</h2>
     
     }
    </section>
  )
}

export default Products