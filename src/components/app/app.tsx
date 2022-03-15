import Main from '../main/main';
import Product from '../product/product';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { appRoutes } from '../../utils/const';
import Cart from '../cart/cart';
import page404 from '../page404/page404';


export default function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route component={Main} path={appRoutes.main} exact/>
        <Route component={Cart} path={appRoutes.cart} exact/>
        <Route component={Product} path={appRoutes.product} exact/>
        <Route component={page404}/>
      </Switch>
    </BrowserRouter>
  );
}

