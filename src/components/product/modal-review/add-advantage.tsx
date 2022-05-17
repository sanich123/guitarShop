import { memo } from 'react';

function AddAdvantage({setAdvantage}: {setAdvantage: (arg: string) => void}) {

  return (
    <>
      <label
        className="form-review__label form-review__label--required"
        htmlFor="user-name"
      >
        Достоинства
      </label>
      <input
        className="form-review__input"
        id="pros"
        type="text"
        autoComplete="off"
        onChange={({ target }) => setAdvantage(target.value)}
      />
      <p className="form-review__warning">
        Заполните поле
      </p>
    </>
  );
}

export default memo(AddAdvantage);
