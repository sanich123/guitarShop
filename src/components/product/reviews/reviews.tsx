import { useState } from 'react';
import { Comments } from '../../../types/types';
import Review from '../../review/review';

export default function Reviews({comments}: {comments: Comments[]}) {
  const [sliceNumber, setSliceNumber] = useState(2);

  return (
    <>
      {comments.slice(0, sliceNumber).map(({id, ...rest}) => <Review key={id} {...rest} />)}
      {comments.length >= 2 && sliceNumber < comments.length &&
      <button
        className="button button--medium reviews__more-button"
        onClick={() => setSliceNumber(sliceNumber + 2)}
      >Показать еще отзывы
      </button>}
    </>
  );
}
