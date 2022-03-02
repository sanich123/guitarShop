export default function SortType() {

  return (
    <div className="catalog-sort__type">
      <button
        className="catalog-sort__type-button catalog-sort__type-button--active"
        aria-label="по цене"
        tabIndex={-1}
      >по цене
      </button>
      <button
        className="catalog-sort__type-button"
        aria-label="по популярности"
      >по популярности
      </button>
    </div>
  );
}
