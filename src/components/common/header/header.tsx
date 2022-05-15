import { useSelector } from 'react-redux';
import { State } from '../../../types/types';
import CartLogo from './cart-logo/cart-logo';
import FormSearch from './form-search/form-search';
import Logo from './logo/logo';
import NavList from './nav-list/nav-list';

export function Header() {
  const inCart = useSelector(({cart}: State) => cart);

  return (
    <header className="header" id="header">
      <div className="container header__wrapper">
        <Logo/>
        <NavList/>
        <FormSearch/>

        {inCart?.length > 0 && <CartLogo />}

      </div>
    </header>
  );
}

