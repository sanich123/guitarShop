/* eslint-disable no-console */
import { useState } from 'react';
import { Guitar } from '../../types/types';
import { appRoutes } from '../../utils/const';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Footer from '../footer/footer';
import Header from '../header/header';
import Svg from '../svg/svg';
import CartItem from './item/cart-item';
import Promocode from './promocode/promocode';
import TotalInfo from './total-info/total-info';

export default function Cart({guitars}: {guitars: Guitar[]}) {
  const discount = 3000;
  const [quantity, setQuantity] = useState(1);
  const [cardId, setId] = useState('');

  const adaptedGuitars = guitars.map((guitar) => ({...guitar, quantity: 1}));

  const changedGuitars = adaptedGuitars.map((guitar) => {
    if (guitar.id === +cardId) {
      guitar.quantity = quantity;
    }
    return guitar;
  });

  const allGuitarsPrice = changedGuitars.reduce((total, el) => total + (el.price * el.quantity), 0);

  return (
    <div className="wrapper">
      <Svg/>
      <Header/>
      <main className="page-content">
        <div className="container">
          <h1 className="title title--bigger page-content__title">Корзина</h1>
          <Breadcrumbs place={appRoutes.cart}/>
          <div className="cart">
            {guitars.map(({id, ...rest}) => <CartItem setQuantity={setQuantity} setId={setId} key={id} id={id} {...rest}/>)}
            <div className="cart__footer">
              <Promocode/>
              <TotalInfo allGuitarsPrice={allGuitarsPrice} discount={discount} />
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
