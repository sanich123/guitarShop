import { stringsTypes } from '../../../utils/const';

export default function StringFilters() {

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
          />
          <label htmlFor={`${number}-strings`}>{number}</label>
        </div>
      ))}
    </fieldset>
  );
}
