import { memo } from 'react';

interface AddNameProps {
  setSurName: (arg: string) => void;
  surName: string;
  isError: boolean;
}

function AddName({setSurName, surName, isError}: AddNameProps) {

  return (
    <div className="form-review__name-wrapper">
      <label
        className="form-review__label form-review__label--required"
        htmlFor="user-name"
      >
        Ваше Имя
      </label>
      <input
        className="form-review__input form-review__input--name"
        id="user-name"
        type="text"
        autoComplete="off"
        autoFocus
        onChange={({ target }) => setSurName(target.value)}
      />
      {isError && !surName && (
        <span className="form-review__warning">Заполните поле</span>
      )}
    </div>
  );
}

export default memo(AddName);
