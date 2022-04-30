import { marks } from '../../../utils/const';
import ReviewRating from './review-rating';

export default function Rating({setRating}: {setRating: (arg: string) => void}) {

  return (
    <div>
      <span className="form-review__label form-review__label--required">
        Ваша Оценка
      </span>
      <div className="rate rate--reverse">
        {Object.entries(marks).map(([title, mark]) => (
          <ReviewRating
            key={title}
            title={title}
            mark={mark}
            setRating={setRating}
          />
        ))}
        <span className="rate__count" />
        <span className="rate__message">Поставьте оценку</span>
      </div>
    </div>
  );
}
