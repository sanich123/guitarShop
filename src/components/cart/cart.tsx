/* eslint-disable no-console */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetGuitarsQuery } from '../../redux';
import { Guitar } from '../../types/types';
import { appRoutes } from '../../utils/const';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Footer from '../footer/footer';
import Header from '../header/header';
import Loader from '../loader/loader';
import Svg from '../svg/svg';
import CartItem from './item/cart-item';
import Promocode from './promocode/promocode';
import TotalInfo from './total-info/total-info';

export default function Cart() {
  const discount = 3000;
  const [quantity, setQuantity] = useState(1);
  const [cardId, setId] = useState('');
  const inCart = [...new Set(useSelector(({cart}: {cart: number[]}) => cart))];
  console.log(quantity, cardId);
  const request = inCart.map((number) => `id=${number}`).join('&');

  const {data, isLoading} = useGetGuitarsQuery(request);
  if (isLoading) {
    return <Loader/>;
  }
  const adaptedGuitars = data.map((guitar: Guitar) => ({...guitar, quantity: 1}));

  // const [isInCart, setIsInCart] = useState(adaptedGuitars);

  const changedGuitars = adaptedGuitars.map((guitar: Guitar & {quantity: number}) => {
    if (guitar.id === +cardId) {
      guitar.quantity = quantity;
    }
    return guitar;
  });

  const allGuitarsPrice = changedGuitars.reduce((total: number, el: Guitar & {quantity: number}) => total + (el.price * el.quantity), 0);

  if (isLoading) {
    return <Loader/>;
  }

  return (
    <div className="wrapper">
      <Svg/>
      <Header/>
      <main className="page-content">
        <div className="container">
          <h1 className="title title--bigger page-content__title">Корзина</h1>
          <Breadcrumbs place={appRoutes.cart}/>
          <div className="cart">
            {inCart.length > 0 && data.map(({id, ...rest}: Guitar) => <CartItem setQuantity={setQuantity} setId={setId} key={id} id={id} {...rest}/>)}
            <div className="cart__footer">

              {inCart.length > 0 &&
              <>
                <Promocode/>
                <TotalInfo
                  discount={discount}
                  allGuitarsPrice={allGuitarsPrice}
                />
              </>}
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
