import { useState, memo } from 'react';
import { useGetCommentsQuery } from '../../../redux/guitars-api';
import { Comments } from '../../../types/types';
import { COMMENTS_ON_PAGE } from '../../../utils/const';
import { errorHandler } from '../../../utils/utils';
import { Loader } from '../../common/loader/loader';
import Review from '../review/review';

export function Reviews({uniq}: { uniq?: string }) {
  const {data: reviews, isLoading, error} = useGetCommentsQuery(uniq);
  const [sliceNumber, setSliceNumber] = useState(3);
  const slicedReviews: Comments[] = reviews
    ?.slice()
    .sort((dateA: Comments, dateB: Comments) => Date.parse(dateB.createAt) - Date.parse(dateA.createAt))
    .slice(0, sliceNumber);

  return (
    <>
      {isLoading && <Loader />}
      {error && errorHandler(error)}
      {reviews && (
        <>
          {reviews.length === 0 && <h3>There are no comments to this product</h3>}
          {reviews.length > 0 && slicedReviews.map(({ id, ...rest }) => <Review key={id} {...rest} />)}
          {slicedReviews.length !== reviews.length && (
            <button
              className="button button--medium reviews__more-button"
              onClick={() => setSliceNumber(sliceNumber + COMMENTS_ON_PAGE)}
            >
              Показать еще отзывы
            </button>)}
        </>)}
    </>);
}

export default memo(Reviews, (prev, next) => prev.uniq === next.uniq);

