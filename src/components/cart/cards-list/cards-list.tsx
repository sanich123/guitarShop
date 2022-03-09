/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { Guitar } from '../../../types/types';
import CartItem from '../item/cart-item';

interface CartItemProps {
  guitars: Guitar[],
  changeInCart: {id: number, quantity: number}[],
  setIsInCart: (arg: {id: number, quantity: number}[]) => void,
}

export default function CardsList({guitars, changeInCart, setIsInCart}: CartItemProps) {
  const [quantity, setQuantity] = useState(1);
  const [cardId, setId] = useState('');

  useEffect(() => {
    if (quantity !== 1 && cardId !== '') {
      setIsInCart(changeInCart.map((cart) => {
        if (cart.id === +cardId) {
          cart.quantity = quantity;
        }
        return cart;
      }));
    }

  }, [cardId, changeInCart, quantity, setIsInCart]);

  return (
    <>
      {guitars.map(({id, ...rest}: Guitar) => <CartItem setQuantity={setQuantity} setId={setId} key={id} id={id} {...rest}/>)}
    </>
  );
}
