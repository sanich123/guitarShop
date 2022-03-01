import { numbersMaker } from '../../utils/utils';

interface RatingProps {
  width: number,
  height: number,
  rating: number
}

export default function Rating({width, height, rating}: RatingProps) {

  return (
    <>
      {numbersMaker.map((number) => (
        <svg key={number} width={width} height={height} aria-hidden="true">
          <use xlinkHref={`#icon${Math.floor(rating) >= number ? '-full' : ''}-star`}/>
        </svg>))}
    </>
  );
}
