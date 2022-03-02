export default function SortOrder() {

  return (
    <div className="catalog-sort__order">
      <button
        className="catalog-sort__order-button catalog-sort__order-button--up catalog-sort__order-button--active"
        aria-label="По возрастанию"
        tabIndex={-1}
      >
      </button>
      <button
        className="catalog-sort__order-button catalog-sort__order-button--down"
        aria-label="По убыванию"
      >
      </button>
    </div>
  );
}
