import CartLogo from '../cart-logo/cart-logo';
import FormSearch from '../form-search/form-search';
import Logo from '../logo/logo';
import NavList from '../nav-list/nav-list';

export function Header() {

  return (
    <header className="header" id="header">
      <div className="container header__wrapper">
        <Logo/>
        <NavList/>
        <FormSearch/>
        <CartLogo />
      </div>
    </header>
  );
}

