import { useState } from 'react';
import { useGetGuitarsQuery } from '../../../redux';
import { Comments } from '../../../types/types';
import { sortReviews } from '../../../utils/utils';
import Loader from '../../common/loader/loader';
import Review from '../review/review';

interface ReviewsProps {
  comments: Comments[],
  uniq: string,
}

export default function Reviews({comments, uniq}: ReviewsProps) {
  const {data, isLoading} = useGetGuitarsQuery('/comments');
  const [sliceNumber, setSliceNumber] = useState(2);

  if (isLoading) {
    return <Loader/>;
  }

  const filtredComments = data.filter(({guitarId}: {guitarId: number}) => guitarId === +uniq);
  const allComments = [...filtredComments, ...comments];

  return (
    <>
      {sortReviews(allComments).slice(0, sliceNumber).map(({id, ...rest}) => <Review key={id} {...rest} />)}
      {allComments.length >= 2 && sliceNumber < comments.length &&
      <button
        className="button button--medium reviews__more-button"
        onClick={() => setSliceNumber(sliceNumber + 2)}
      >Показать еще отзывы
      </button>}
    </>
  );
}
