import { memo } from 'react';
interface AddIssueProps {
  setIssue: (arg: string) => void;
  issue: string;
  isError: boolean;
}
function AddIssue({setIssue, issue, isError}: AddIssueProps) {

  return (
    <>
      <label
        className="form-review__label form-review__label--required"
        htmlFor="user-name"
      >
        Недостатки
      </label>
      <input
        className="form-review__input"
        id="pros"
        type="text"
        autoComplete="off"
        onChange={({ target }) => setIssue(target.value)}
      />
      {isError && !issue && <p className="form-review__warning">Заполните поле</p>}
    </>);
}

export default memo(AddIssue);
