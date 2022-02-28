import Main from '../main/main';
import Product from '../product/product';
import {mockGuitars} from '../../mocks/mocks';

export default function App(): JSX.Element {
  return <Main />;
  return <Product guitar={mockGuitars[2]} />;
}

