import React from 'react';

interface RatingProps {
  width: number,
  height: number,
  rating?: number
}

export default function Rating({width, height, rating}: RatingProps) {

  return (
    <svg width={width} height={height} aria-hidden="true">
      <use xlinkHref="#icon-full-star" />
    </svg>
  );
}

// <svg width={width} height={height} aria-hidden="true">
//   <use xlinkHref="#icon-full-star" />
// </svg>
// <svg width="12" height="11" aria-hidden="true">
//   <use xlinkHref="#icon-full-star" />
// </svg>
// <svg width="12" height="11" aria-hidden="true">
//   <use xlinkHref="#icon-full-star" />
// </svg>
// <svg width="12" height="11" aria-hidden="true">
//   <use xlinkHref="#icon-full-star" />
// </svg>
// <svg width="12" height="11" aria-hidden="true">
//   <use xlinkHref="#icon-star" />
// </svg>
