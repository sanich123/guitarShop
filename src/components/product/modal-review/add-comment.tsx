import { memo } from 'react';

interface AddCommentProps {
  setComment: (arg: string) => void,
  comment: string,
  isError: boolean,
}
function AddComment({ setComment, comment, isError }: AddCommentProps) {

  return (
    <>
      <label
        style={{ marginTop: 5 }}
        className="form-review__label form-review__label--required"
        htmlFor="user-name"
      >
        Комментарий
      </label>
      <textarea
        className="form-review__input form-review__input--textarea"
        id="user-name"
        rows={10}
        autoComplete="off"
        onChange={({ target }) => setComment(target.value)}
      />
      {isError && !comment && (
        <p className="form-review__warning">Заполните поле</p>
      )}
    </>
  );
}

export default memo(AddComment);
