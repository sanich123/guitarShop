import { useEffect } from 'react';
import { FiltersProps } from '../../../types/types';
import { searchParams, sortDirections } from '../../../utils/const';
import { getChangedString, getChangedStringBack } from '../../../utils/utils';

interface SortOrderProps extends Omit<FiltersProps, 'guitars' | 'setPageNumber'> {
  direction: string;
  setDirection: (arg: string) => void;
}

export default function SortDirection({direction, setDirection, isError, needToReset, setNeedToReset}: SortOrderProps) {
  useEffect(() => {
    if (needToReset) {
      setDirection(searchParams.defaultDirection);
      setNeedToReset(false);
    }
  }, [needToReset, setDirection, setNeedToReset]);

  return (
    <div className="catalog-sort__order">
      {Object.entries(sortDirections).map(([rus, eng]) => (
        <button
          key={rus}
          className={`catalog-sort__order-button catalog-sort__order-button--${eng} ${
            getChangedString(direction) === eng
              ? 'catalog-sort__order-button--active'
              : ''
          }`}
          aria-label={rus}
          tabIndex={getChangedString(direction) === eng ? -1 : 0}
          onClick={() => setDirection(getChangedStringBack(eng))}
          disabled={isError}
        />
      ))}
    </div>);
}
