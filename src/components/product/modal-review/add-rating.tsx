import React, { memo } from 'react';
import { marks } from '../../../utils/const';
interface AddRatingProps {
  setRating: (arg: string) => void;
  rating: string;
  isError: boolean;
}
function AddRating({setRating, rating, isError}: AddRatingProps) {

  return (
    <div>
      <span className="form-review__label form-review__label--required">
        Ваша Оценка
      </span>
      <div className="rate rate--reverse">
        {Object.entries(marks).map(([title, mark]) => (
          <React.Fragment key={title}>
            <input
              onClick={() => setRating(`${mark}`)}
              className="visually-hidden"
              type="radio"
              id={`star-${title}`}
              name="rate"
              value={mark}
              tabIndex={0}
            />
            <label
              className="rate__label"
              htmlFor={`star-${title}`}
              title={`${mark}`}
            />
          </React.Fragment>))}
        <span className="rate__count" />
        {!rating && <span className="rate__message">Поставьте оценку</span>}
      </div>
    </div>);
}

export default memo(AddRating);
