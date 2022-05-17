import { memo } from 'react';

interface AddCommentProps {
  setComment: (arg: string) => void;
}

function AddComment({setComment}: AddCommentProps) {

  return (
    <>
      <label
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
      <p className="form-review__warning">
        Заполните поле
      </p>
    </>
  );
}

export default memo(AddComment);
