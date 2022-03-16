import { Link } from 'react-router-dom';
import { appRoutes } from '../../../utils/const';

export default function Page404() {
  return (
    <>
      <h1>Заправшиваемая страница не найдена</h1>
      <Link to={appRoutes.main}/>
    </>
  );
}
