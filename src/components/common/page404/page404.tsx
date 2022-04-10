import { Link } from 'react-router-dom';
import { appRoutes } from '../../../utils/const';

export default function Page404() {

  return (
    <>
      <h1>Сильно старались, но не смогли найти запрашиваемую страницу.</h1>
      <Link to={appRoutes.main}>При желании, можете перейти на главную страницу</Link>
      <h2>Или тут потусить, если охота</h2>
    </>
  );
}
