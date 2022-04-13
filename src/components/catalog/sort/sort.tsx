import { Guitar } from '../../../types/types';
import SortOrder from './direction/direction-sort';
import SortType from './type/sort-type';

interface SortProps {
  setSortPopular: (arg: string) => void,
  setDirection: (arg: string) => void
  sortPopular: string,
  direction: string,
  guitars: Guitar[]
}

export function Sort({setSortPopular, setDirection, sortPopular, direction, guitars}: SortProps) {

  return (
    <div className="catalog-sort">
      <h2 className="catalog-sort__title">Сортировать:</h2>
      {guitars.length > 1 && (
        <>
          <SortType setSortPopular={setSortPopular} sortPopular={sortPopular} />
          <SortOrder setDirection={setDirection} direction={direction} />
        </>
      )}
    </div>
  );
}
