import { memo } from 'react';

interface AddAdvantageProps {
  setAdvantage: (arg: string) => void;
}

function AddAdvantage({setAdvantage}: AddAdvantageProps) {

  return (
    <>
      <label className="form-review__label" htmlFor="user-name">
                Достоинства
      </label>
      <input
        className="form-review__input"
        id="pros"
        type="text"
        autoComplete="off"
        onChange={({ target }) => setAdvantage(target.value)}
      />
    </>
  );
}

export default memo(AddAdvantage);
