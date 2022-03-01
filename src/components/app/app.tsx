import Main from '../main/main';
import Product from '../product/product';
import {mockGuitars} from '../../mocks/mocks';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { appRoutes } from '../../utils/const';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={appRoutes.main} exact>
          <Main/>
        </Route>
        <Route path={appRoutes.product} exact>
          <Product guitars={mockGuitars} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

