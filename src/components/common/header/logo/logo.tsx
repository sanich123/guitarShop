import { memo } from 'react';
import { Link } from 'react-router-dom';
import { appRoutes } from '../../../../utils/const';

function Logo() {

  return (
    <Link className="header__logo logo" to={appRoutes.main}>
      <img
        className="logo__img"
        width="70"
        height="70"
        src="../img/svg/logo.svg"
        alt="Логотип"
      />
    </Link>
  );
}

export default memo(Logo);


