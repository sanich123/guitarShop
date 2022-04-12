import { Link } from 'react-router-dom';
import { appRoutes } from '../../../utils/const';

export default function NoItems() {

  return (
    <>
      <h1>Your cart has no items :(</h1>
      <h2>
        <Link to={appRoutes.main}>Go ahead and buy something!</Link>
      </h2>
    </>
  );
}
