import { memo } from 'react';

interface AddIssueProps {
  setIssue: (arg: string) => void,
  issue: string,
}


function AddIssue({setIssue, issue}: AddIssueProps) {

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
        value={issue}
      />
    </>
  );
}

export default memo(AddIssue, (prev, next) => prev.issue === next.issue);
