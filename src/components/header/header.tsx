import { Link } from 'react-router-dom';
import { appRoutes } from '../../utils/const';
import FormSearch from './form-search/form-search';
import NavList from './nav-list/nav-list';

export default function Header() {

  return (
    <header className="header" id="header">
      <div className="container header__wrapper">
        <Link className="header__logo logo" to={appRoutes.main}>
          <img className="logo__img" width="70" height="70" src="./img/svg/logo.svg" alt="Логотип" />
        </Link>
        <nav className="main-nav">
          <NavList/>
        </nav>
        <FormSearch/>
        <Link className="header__cart-link" to={appRoutes.cart} aria-label="Корзина">
          <svg className="header__cart-icon" width="14" height="14" aria-hidden="true">
            <use xlinkHref="#icon-basket"/>
          </svg>
          <span className="visually-hidden">Перейти в корзину</span>
          <span className="header__cart-count">2</span>
        </Link>
      </div>
    </header>
  );
}
