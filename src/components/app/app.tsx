import Main from '../main/main';
import Product from '../product/product';
import {mockGuitars} from '../../mocks/mocks';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { appRoutes } from '../../utils/const';
import Cart from '../cart/cart';


export default function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route component={Main} path={appRoutes.main} exact/>
        <Route path={appRoutes.cart} exact>
          <Cart guitars={mockGuitars.slice(0,3)}/>
        </Route>
        <Route component={Product} path={appRoutes.product} exact/>
      </Switch>
    </BrowserRouter>
  );
}

