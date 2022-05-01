export default function AddAdvantage({setAdvantage}: {setAdvantage: (arg: string) => void}) {
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
