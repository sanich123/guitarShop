import { useMemo, useState } from 'react';
import { useGetCommentsQuery } from '../../../redux';
import { Comments } from '../../../types/types';
import { sortReviews } from '../../../utils/utils';
import {Loader} from '../../common/loader/loader';
import Review from '../review/review';

interface ReviewsProps {
  comments: Comments[],
  uniq?: string,
}

export function Reviews({comments, uniq}: ReviewsProps) {
  const {data: reviews, isLoading} = useGetCommentsQuery('');
  const [sliceNumber, setSliceNumber] = useState(2);

  const filtredComments = useMemo(() => reviews?.filter(({guitarId}: {guitarId: number}) => guitarId === Number(uniq)), [reviews, uniq]);
  const allComments = [...filtredComments || [], ...comments];

  return (
    <>
      {isLoading && <Loader />}

      {allComments.length === 0 && (
        <h3>There are no comments to this product</h3>
      )}

      {sortReviews(allComments)
        .slice(0, sliceNumber)
        .map(({ id, ...rest }) => (
          <Review key={id} {...rest} />
        ))}

      {allComments.length >= 2 && sliceNumber < comments.length && (
        <button
          className="button button--medium reviews__more-button"
          onClick={() => setSliceNumber(sliceNumber + 2)}
        >
          Показать еще отзывы
        </button>
      )}
    </>
  );
}

