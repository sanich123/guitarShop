import React from 'react';
import { marks } from '../../../utils/const';


export default function AddRating({setRating}: {setRating: (arg: string) => void}) {

  return (
    <div>
      <span className="form-review__label form-review__label--required">
        Ваша Оценка
      </span>
      <div className="rate rate--reverse">
        {Object.entries(marks).map(([title, mark]) => (
          <React.Fragment key={title}>
            <input
              onClick={() => setRating(mark.toString())}
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
              title={mark.toString()}
            />
          </React.Fragment>
        ))}
        <span className="rate__count" />
        <span className="rate__message">Поставьте оценку</span>
      </div>
    </div>
  );
}