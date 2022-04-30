interface RatingProps {
  width: number,
  height: number,
  rating: number
}

export default function Rating({width, height, rating}: RatingProps) {

  return (
    <>
      {[...Array(5).keys()]
        .map((number) => ++number)
        .map((number) => (
          <svg
            key={number}
            width={width}
            height={height}
            aria-hidden="true"
          >
            <use
              xlinkHref={`#icon${
                Math.floor(rating) >= number ? '-full' : ''
              }-star`}
            />
          </svg>
        ))}
    </>
  );
}
