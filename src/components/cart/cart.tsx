import { Guitar } from '../../types/types';
import { appRoutes } from '../../utils/const';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Footer from '../footer/footer';
import Header from '../header/header';
import CartItem from './item/cart-item';
import Promocode from './promocode/promocode';
import TotalInfo from './total-info/total-info';

export default function Cart({guitars}: {guitars: Guitar[]}) {
  const allGuitarsPrice = guitars.reduce((total, el) => total + el.price, 0);
  const discount = 3000;

  return (
    <div className="wrapper">
      <Header/>
      <main className="page-content">
        <div className="container">
          <h1 className="title title--bigger page-content__title">Корзина</h1>
          <Breadcrumbs place={appRoutes.cart}/>
          <div className="cart">
            {guitars.map(({id, ...rest}) => <CartItem key={id} {...rest}/>)}
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
