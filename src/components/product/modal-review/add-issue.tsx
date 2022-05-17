import { memo } from 'react';

function AddIssue({setIssue}: {setIssue: (arg: string) => void}) {

  return (
    <>
      <label className="form-review__label form-review__label--required" htmlFor="user-name">
        Недостатки
      </label>
      <input
        className="form-review__input"
        id="pros"
        type="text"
        autoComplete="off"
        onChange={({ target }) => setIssue(target.value)}
      />
      <p className="form-review__warning">Заполните поле
      </p>
    </>
  );
}

export default memo(AddIssue);
