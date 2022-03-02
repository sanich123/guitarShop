import { Guitar } from '../../../types/types';
import { stringsTypes } from '../../../utils/const';

interface StringFiltersProps {
  guitars: Guitar[]
}

export default function StringFilters({guitars}: StringFiltersProps) {
  const existingStrings = [...new Set(guitars.map(({stringCount}) => stringCount))];

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Количество струн</legend>
      {stringsTypes.map((number) => (
        <div key={number} className="form-checkbox catalog-filter__block-item">
          <input
            className="visually-hidden"
            type="checkbox"
            id={`${number}-strings`}
            name={`${number}-strings`}
            disabled={!existingStrings.includes(number)}
          />
          <label htmlFor={`${number}-strings`}>{number}</label>
        </div>
      ))}
    </fieldset>
  );
}
