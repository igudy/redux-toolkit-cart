import Navbar from "./components/Navbar";
import React from 'react'
import CartContainer from "./CartContainer";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./components/Modal";

function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if(isLoading){
    return(
      <div class="loader">Loading...</div>
    )
  }

  return (
    <main>
    {isOpen && <Modal />}
    <Navbar />
    <CartContainer />
    </main>
  );
}

export default App;