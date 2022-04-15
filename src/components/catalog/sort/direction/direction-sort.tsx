import { sortDirections } from '../../../../utils/const';
import { stringChanger, stringChangerBack } from '../../../../utils/utils';

interface SortOrderProps {
  direction: string,
  setDirection: (arg: string) => void,
  isError: boolean
}

export default function SortOrder({direction, setDirection, isError}: SortOrderProps) {

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
