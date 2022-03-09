/* eslint-disable no-console */
import { useSelector } from 'react-redux';
import { useGetGuitarsQuery } from '../../redux';
import { CartType } from '../../types/types';
import { appRoutes } from '../../utils/const';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Footer from '../footer/footer';
import Header from '../header/header';
import Loader from '../loader/loader';
import Svg from '../svg/svg';
import CardsList from './cards-list/cards-list';
import Promocode from './promocode/promocode';
import TotalInfo from './total-info/total-info';

export default function Cart() {
  const discount = 3000;
  const inCart = useSelector(({cart}: CartType) => cart);
  const forRequest = inCart.map(({id}) => id);


  const request = forRequest.map((number) => `id=${number}`).join('&');
  const {data, isLoading} = useGetGuitarsQuery(request);

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
            {<CardsList guitars={data} />}
            <div className="cart__footer">
              <Promocode/>
              <TotalInfo
                discount={discount}
                allGuitarsPrice={345}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
