import { Comments } from '../../../types/types';
import { getFormattedDate } from '../../../utils/utils';
import Rating from '../../common/rating/rating';

export default function Review({createAt, userName, advantage, disadvantage, comment, rating}: Omit<Comments, 'id'>) {

  return (
    <div className="review">
      <div className="review__wrapper">
        <h4 className="review__title review__title--author title title--lesser">
          {userName}
        </h4>
        <span className="review__date">{getFormattedDate(createAt)}</span>
      </div>
      <div className="rate review__rating-panel" aria-hidden="true">
        <span className="visually-hidden">Рейтинг:</span>
        <Rating width={16} height={16} rating={rating} />
        <span className="rate__count" />
        <span className="rate__message" />
      </div>
      <h4 className="review__title title title--lesser">Достоинства:</h4>
      <p className="review__value">{advantage}</p>
      <h4 className="review__title title title--lesser">Недостатки:</h4>
      <p className="review__value">{disadvantage}</p>
      <h4 className="review__title title title--lesser">Комментарий:</h4>
      <p className="review__value">{comment}</p>
    </div>
  );
}
