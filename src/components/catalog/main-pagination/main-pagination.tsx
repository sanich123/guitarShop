import cn from 'classnames';

interface MainPaginationProps {
  setPageNumber: (arg: number) => void,
  pageNumber: number,
  cardsOnPage: number,
  count: number
}

export function MainPagination({setPageNumber, pageNumber, cardsOnPage, count}: MainPaginationProps) {
  const counter = Math.ceil(count / cardsOnPage);
  const isVisibleStart = cn('pagination__page', 'pagination__page--next', {'visually-hidden' : pageNumber === 1});
  const isVisibleEnd = cn('pagination__page', 'pagination__page--next', {'visually-hidden' : pageNumber === counter});

  return (
    <div className="pagination page-content__pagination">
      <ul className="pagination__list">
        <li className={isVisibleStart}>
          <a
            className="link pagination__page-link"
            onClick={() => setPageNumber(pageNumber - 1)}
            href="#footer"
          >
            Назад
          </a>
        </li>
        {[...Array(counter).keys()]
          .map((e) => ++e)
          .map((number) => (
            <li
              key={number}
              className={`pagination__page ${number === pageNumber ? 'pagination__page--active' : ''}`}
              onClick={() => setPageNumber(number)}
            >
              <a className="link pagination__page-link" href="#footer">
                {number}
              </a>
            </li>
          ))}
        <li className={isVisibleEnd}>
          <a
            className="link pagination__page-link"
            onClick={() => setPageNumber(pageNumber + 1)}
            href="#footer"
          >
            Далее
          </a>
        </li>
      </ul>
    </div>
  );
}
