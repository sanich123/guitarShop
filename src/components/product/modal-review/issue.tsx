export default function Issue({setIssue}: {setIssue: (arg: string) => void}) {

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
