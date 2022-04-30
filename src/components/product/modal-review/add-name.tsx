export default function AddName({setSurName}: {setSurName: (arg: string) => void}) {

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
      <span className="form-review__warning">Заполните поле</span>
    </div>
  );
}
