import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { State } from '../../../../types/types';
import { appRoutes } from '../../../../utils/const';

export default function CartLogo() {
  const inCart = useSelector(({ cart }: State) => cart);

  return (
    <Link
      className="header__cart-link"
      to={appRoutes.cart}
      aria-label="Корзина"
    >
      <svg
        className="header__cart-icon"
        width="14"
        height="14"
        aria-hidden="true"
      >
        <use xlinkHref="#icon-basket" />
      </svg>
      <span className="visually-hidden">Перейти в корзину</span>
      <span className="header__cart-count">{inCart.length}</span>
    </Link>
  );
}
