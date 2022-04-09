import { useState } from 'react';
import { useGetGuitarsQuery } from '../../redux';
import { Guitar } from '../../types/types';
import { appRoutes } from '../../utils/const';
import { errorHandler } from '../../utils/utils';
import Breadcrumbs from '../common/breadcrumbs/breadcrumbs';
import Footer from '../common/footer/footer';
import Header from '../common/header/header';
import Loader from '../common/loader/loader';
import Svg from '../common/svg/svg';
import CartItem from './item/cart-item';
import Promocode from './promocode/promocode';
import TotalInfo from './total-info/total-info';
import ModalAction from '../common/modal/modal-action/modal-action';
import NoItems from './no-items/no-items';

export default function Cart() {
  const [showActionModal, setActionModal] = useState(false);
  const [deleteId, setDeleteId] = useState('');
  const inCart = [...JSON.parse(localStorage.cart)];
  const forRequest = [...new Set(inCart.map(({id}) => id))];

  const request = forRequest?.map((number) => `id=${number}`).join('&');
  const {data, isLoading, error} = useGetGuitarsQuery(`?${request}`);

  return (
    <>
      {isLoading && <Loader />}

      {error && errorHandler(error)}

      {data && (
        <div className="wrapper">
          <Svg />
          <Header />
          <main className="page-content">
            <div className="container">
              <h1 className="title title--bigger page-content__title">
                  Корзина
              </h1>
              <Breadcrumbs place={appRoutes.cart} />
              <div className="cart">
                {showActionModal && (
                  <ModalAction
                    guitars={data}
                    deleteId={deleteId}
                    setActionModal={setActionModal}
                  />
                )}

                {inCart.length > 0 ?
                  <>
                    {data
                      .filter((guitar: Guitar) =>
                        forRequest.includes(guitar.id))
                      .map(({ id, ...rest }: Guitar) => (
                        <CartItem
                          key={id}
                          id={id}
                          {...rest}
                          setActionModal={setActionModal}
                          setDeleteId={setDeleteId}
                          inCart={inCart}
                        />
                      ))}

                    <div className="cart__footer">
                      <Promocode />
                      <TotalInfo/>
                    </div>
                  </>
                  : <NoItems/>}
              </div>
            </div>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
