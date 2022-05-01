import { memo } from 'react';

interface AddCommentProps {
  setComment: (arg: string) => void;
  comment: string,
}

function AddComment({setComment, comment}: AddCommentProps) {

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
        value={comment}
      />
    </>
  );
}

export default memo(AddComment, (prev, next) => prev.comment === next.comment);
