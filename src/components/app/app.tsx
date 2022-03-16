import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from '../catalog/main';
import Product from '../product/product';
import Cart from '../cart/cart';
import page404 from '../common/page404/page404';
import { appRoutes } from '../../utils/const';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route component={Main} path={appRoutes.main} exact />
        <Route component={Cart} path={appRoutes.cart} exact />
        <Route component={Product} path={appRoutes.product} exact />
        <Route component={page404} />
      </Switch>
    </Router>
  );
}
