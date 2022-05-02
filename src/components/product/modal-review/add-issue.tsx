import { memo } from 'react';

interface AddIssueProps {
  setIssue: (arg: string) => void,
}


function AddIssue({setIssue}: AddIssueProps) {

  return (
    <>
      <label className="form-review__label" htmlFor="user-name">
        Недостатки
      </label>
      <input
        className="form-review__input"
        id="pros"
        type="text"
        autoComplete="off"
        onChange={({ target }) => setIssue(target.value)}
      />
    </>
  );
}

export default memo(AddIssue);
