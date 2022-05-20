import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { State } from '../../../../types/types';
import { appRoutes } from '../../../../utils/const';

export default function CartLogo() {
  const amount = useSelector(({ cart }: State) => cart).reduce((total, {quantity}) => total += quantity, 0);

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
      {amount > 0 && <span className="header__cart-count">{amount}</span>}
    </Link>
  );
}
