import { useGetGuitarsQuery } from '../../../redux';
import { useSelector } from 'react-redux';
import { useModal } from '../../../hooks/use-modal';
import { Footer, Header, Loader, Icons, ModalAction, CartItem, Promocode, TotalInfo } from '../../index';
import { State, Guitar } from '../../../types/types';
import { appRoutes } from '../../../utils/const';
import { errorHandler } from '../../../utils/utils';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../common/breadcrumbs/breadcrumbs';

export default function Cart() {
  const { showActionModal, setActionModal, setGuitarId, guitarId} = useModal();
  const inCart = useSelector(({cart}: State) => cart);
  const forRequest = inCart.map(({id}) => id);
  const request = forRequest?.map((number) => `id=${number}`).join('&');
  const {data: guitarsInCart, isLoading, error} = useGetGuitarsQuery(`?${request}`);

  return (
    <div className="wrapper">
      <Icons />
      <Header />
      <main className="page-content">
        <div className="container">
          <h1 className="title title--bigger page-content__title">Корзина</h1>
          <Breadcrumbs place={appRoutes.cart} />
          <div className="cart">
            {isLoading && <Loader />}
            {error && errorHandler(error)}

            {showActionModal && (
              <ModalAction
                guitars={guitarsInCart}
                deleteId={guitarId}
                setActionModal={setActionModal}
              />)}

            {inCart?.length > 0 ? (
              <>
                {guitarsInCart
                  ?.filter((guitar: Guitar) => forRequest.includes(guitar.id))
                  .map(({ id, ...rest }: Guitar) => (
                    <CartItem key={id} id={id} {...rest}
                      setActionModal={setActionModal}
                      setDeleteId={setGuitarId}
                      inCart={inCart}
                    />))}
                <div className="cart__footer">
                  <Promocode />
                  <TotalInfo inCart={inCart} />
                </div>
              </>)
              : (
                <>
                  <h1>Your cart has no items :(</h1>
                  <h2><Link to={appRoutes.main}>Go ahead and buy something!</Link></h2>
                </>)}
          </div>
        </div>
      </main>
      <Footer />
    </div>);
}
