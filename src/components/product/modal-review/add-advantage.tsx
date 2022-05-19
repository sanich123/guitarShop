import { memo } from 'react';
interface AddAdvantageProps {
  setAdvantage: (arg: string) => void;
  advantage: string;
  isError: boolean;
}
function AddAdvantage({setAdvantage, advantage, isError}: AddAdvantageProps) {

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
      {isError && !advantage && (
        <p className="form-review__warning">Заполните поле</p>
      )}
    </>
  );
}

export default memo(AddAdvantage);
