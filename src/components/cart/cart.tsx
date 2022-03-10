import { useSelector } from 'react-redux';
import { useGetGuitarsQuery } from '../../redux';
import { CartType, Guitar } from '../../types/types';
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
  const inCart = useSelector(({cart}: CartType) => cart);
  const forRequest = inCart.map(({id}) => id);
  const request = forRequest.length ? forRequest.map((number) => `id=${number}`).join('&') : 'id=';
  const {data, isLoading} = useGetGuitarsQuery(request);

  if (isLoading) {
    return <Loader/>;
  }

  const totalPrice = inCart.reduce((total, {price, quantity}) => total + price * quantity, 0);

  return (
    <div className="wrapper">
      <Svg/>
      <Header/>
      <main className="page-content">
        <div className="container">
          <h1 className="title title--bigger page-content__title">Корзина</h1>
          <Breadcrumbs place={appRoutes.cart}/>
          <div className="cart">
            {data.map(({id, ...rest}: Guitar) => <CartItem key={id} id={id} {...rest}/>)}
            <div className="cart__footer">
              <Promocode/>
              <TotalInfo
                discount={discount}
                allGuitarsPrice={totalPrice}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
