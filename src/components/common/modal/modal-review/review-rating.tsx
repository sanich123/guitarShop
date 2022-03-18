import React from 'react';

interface ReviewRatingProps {
  title: string,
  mark: number,
  setRating: (arg: string) => void
}
export default function ReviewRating({title, mark, setRating}: ReviewRatingProps) {

  return (
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
  );
}
