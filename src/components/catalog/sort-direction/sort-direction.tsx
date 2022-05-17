import { useEffect } from 'react';
import { searchParams, sortDirections } from '../../../utils/const';
import { stringChanger, stringChangerBack } from '../../../utils/utils';

interface SortOrderProps {
  direction: string;
  setDirection: (arg: string) => void;
  isError: boolean;
  needToReset: boolean;
  setNeedToReset: (arg: boolean) => void;
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
      {Object.entries(sortDirections).map(([rus,eng]) => (
        <button
          key={rus}
          className={`catalog-sort__order-button catalog-sort__order-button--${eng} ${stringChanger(direction) === eng ? 'catalog-sort__order-button--active' : ''}`}
          aria-label={rus}
          tabIndex={stringChanger(direction) === eng ? -1 : 0}
          onClick={() => setDirection(stringChangerBack(eng))}
          disabled={isError}
        >
        </button>
      ))}
    </div>
  );
}
