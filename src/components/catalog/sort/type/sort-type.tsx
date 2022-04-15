import { sortTypes } from '../../../../utils/const';

interface SortTypeProps {
  setSortPopular: (arg: string) => void,
  sortPopular: string,
  isError: boolean
}

export default function SortType({setSortPopular, sortPopular, isError}: SortTypeProps) {

  return (
    <div className="catalog-sort__type">
      {Object.entries(sortTypes).map(([rus, eng]) => (
        <button
          key={rus}
          className={`catalog-sort__type-button
          ${sortPopular === eng ? 'catalog-sort__type-button--active': ''}`}
          aria-label={rus}
          value={eng}
          tabIndex={sortPopular === eng ? -1 : 0}
          onClick={() => setSortPopular(eng)}
          disabled={isError}
        >{rus}
        </button>
      ))}
    </div>
  );
}
