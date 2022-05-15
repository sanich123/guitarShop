import { memo } from 'react';

interface AddIssueProps {
  setIssue: (arg: string) => void,
}


function AddIssue({setIssue}: AddIssueProps) {

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
      <p
        className="form-review__warning"
        style={{marginTop: -10}}
      >Заполните поле
      </p>
    </>
  );
}

export default memo(AddIssue);
