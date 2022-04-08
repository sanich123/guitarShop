import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../catalog/main';
import Product from '../product/product';
import Cart from '../cart/cart';
import Page404 from '../common/page404/page404';
import { appRoutes } from '../../utils/const';

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path='*' element={<Page404/>} />
        <Route path={appRoutes.main} element={<Main/>} />
        <Route path={appRoutes.cart} element={<Cart/>} />
        <Route path={appRoutes.product} element={<Product/>}/>
      </Routes>
    </Router>
  );
}
