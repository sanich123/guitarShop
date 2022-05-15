import { memo } from 'react';

interface AddAdvantageProps {
  setAdvantage: (arg: string) => void;
}

function AddAdvantage({setAdvantage}: AddAdvantageProps) {

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
      <p className="form-review__warning" style={{ marginTop: -10 }}>
        Заполните поле
      </p>
    </>
  );
}

export default memo(AddAdvantage);
