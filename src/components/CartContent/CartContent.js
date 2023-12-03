import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartElements from "./CartElements";
import CartTotal from "./CartTotal";

import './CartContent.css';

const CartContent = () => {
  const { cart } = useContext(dataContext);
  


// condition ? " " : " "
// if there is an item in the cart give me the total, if not show me message on <h2>
  return cart.length > 0 ? (
    <>
      {/* <dataContext />  */}
      <CartElements />
      <CartTotal />
    </>
  ) : (
    <h2 className='cart-message-center'>Car is Empty</h2>
  );
};

export default CartContent;
