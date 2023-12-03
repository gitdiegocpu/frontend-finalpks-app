// import { React } from 'react'
//import { useEffects, useState } from 'react'
//import Products from '../App'
// import productList from '../App'
import { useContext } from 'react'
import { dataContext } from "../Context/DataContext";

import "./Products.css"




const Products = () => {
  const { data, cart, setCart } = useContext(dataContext);

  const buyProducts = (product) => {
    setCart([...cart, product]);

  };

  return data.map((product) => {
    return (
        < div className='card' key={product.id} >
            <img src={product.img} alt='img-product-card' />
            <h2>{product.id}</h2>
            <h3>{product.name}</h3>
            <h4>{product.price}$</h4>
            <button onClick={()=>buyProducts(product)}>Buy</button>
        </div>
    );
  });
  
};

export default Products












/*export default function Products () {
   const [items, setItems] = useState([])

   useEffects(() => {
    fetch('http://localhost:3000')
        .then(res => res.json())
        .then(data => setItems(data))
        .catch(err => console.error(err))

   }, [])


   const productsList = () => {
    const [products, setproducts] = useState([]);

   }


    return(
        <div>
            <h2>Product List</h2>
            <ul>
                
                {productsList.map((item) => (
                    <li key={item._id}>
                        {productList.brand},{productsList.price}
                    </li>   

               ) )}
            </ul>
     
                
        </div>
    )
}

