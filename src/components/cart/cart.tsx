import { useGetGuitarsQuery } from '../../redux';
import { useSelector } from 'react-redux';
import { useModal } from '../../hooks/use-modal';
import { Breadcrumbs, Footer, Header, Loader, Icons, ModalAction, CartItem, Promocode, TotalInfo, NoItems } from '../index';
import { State, Guitar } from '../../types/types';
import { appRoutes } from '../../utils/const';
import { errorHandler } from '../../utils/utils';

export default function Cart() {
  const { showActionModal, setActionModal, setGuitarId, guitarId} = useModal();
  const inCart = useSelector(({cart}: State) => cart);
  const forRequest = [...new Set(inCart.map(({id}) => id))];
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
              />
            )}

            {inCart?.length > 0 ? (
              <>
                {guitarsInCart?.filter((guitar: Guitar) => forRequest.includes(guitar.id))
                  .map(({ id, ...rest }: Guitar) => (
                    <CartItem
                      key={id}
                      id={id}
                      {...rest}
                      setActionModal={setActionModal}
                      setDeleteId={setGuitarId}
                      inCart={inCart}
                    />
                  ))}
                <div className="cart__footer">
                  <Promocode />
                  <TotalInfo inCart={inCart} />
                </div>
              </>
            ) : (
              <NoItems />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
