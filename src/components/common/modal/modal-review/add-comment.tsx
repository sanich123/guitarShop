export default function AddComment({setComment}: {setComment: (arg: string) => void}) {

  return (
    <>
      <label className="form-review__label" htmlFor="user-name">
        Комментарий
      </label>
      <textarea
        className="form-review__input form-review__input--textarea"
        id="user-name"
        rows={10}
        autoComplete="off"
        onChange={({ target }) => setComment(target.value)}
      />
    </>
  );
}
