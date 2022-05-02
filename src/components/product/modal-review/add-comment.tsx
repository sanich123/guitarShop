import { memo } from 'react';

interface AddCommentProps {
  setComment: (arg: string) => void;
}

function AddComment({setComment}: AddCommentProps) {

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

export default memo(AddComment);
