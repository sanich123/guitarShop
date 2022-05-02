import { memo } from 'react';

function UpBtn() {

  return (
    <a
      style={{ zIndex: 900 }}
      className="button button--red-border button--big reviews__up-button button--up"
      href="#header"
    >
      Наверх
    </a>
  );
}

export default memo(UpBtn);
