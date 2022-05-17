import { useEffect } from 'react';
import { FiltersProps } from '../../../types/types';
import { searchParams, sortTypes } from '../../../utils/const';

interface SortTypeProps extends Omit<FiltersProps, 'guitars' | 'setPageNumber'> {
  setSortPopular: (arg: string) => void;
  sortPopular: string;
}

export default function SortType({setSortPopular, sortPopular, isError, needToReset, setNeedToReset}: SortTypeProps) {

  useEffect(() => {
    if (needToReset) {
      setSortPopular(searchParams.defaultSort);
      setNeedToReset(false);
    }
  }, [needToReset, setSortPopular, setNeedToReset]);

  return (
    <div className="catalog-sort__type">
      {Object.entries(sortTypes).map(([rus, eng]) => (
        <button
          key={rus}
          className={`catalog-sort__type-button ${sortPopular === eng ? 'catalog-sort__type-button--active': ''}`}
          aria-label={rus}
          value={eng}
          tabIndex={sortPopular === eng ? -1 : 0}
          onClick={() => setSortPopular(eng)}
          disabled={isError}
        >{rus}
        </button>
      ))}
    </div>);
}
