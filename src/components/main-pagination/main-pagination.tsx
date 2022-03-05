import cn from 'classnames';

interface MainPaginationProps {
  setPageNumber: (arg: number) => void,
  pageNumber: number,
  count: number
}

export default function MainPagination({setPageNumber, pageNumber, count}: MainPaginationProps) {
  const isVisibleStart = cn('pagination__page', 'pagination__page--next', {'visually-hidden' : pageNumber === 1});
  const isVisibleEnd = cn('pagination__page', 'pagination__page--next', {'visually-hidden' : pageNumber === count});

  return (
    <ul className="pagination__list">
      <li className={isVisibleStart}>
        <a
          className="link pagination__page-link"
          onClick={() => setPageNumber(pageNumber - 1)}
          href='#footer'
        >Назад
        </a>
      </li>
      {[...Array(count).keys()].map((e) => e + 1).map((number) => (
        <li
          key={number}
          className={`pagination__page ${number === pageNumber ? 'pagination__page--active' : ''}`}
          onClick={() => setPageNumber(number)}
        >
          <a className="link pagination__page-link" href='#footer'>{number}</a>
        </li>
      ))}
      <li className={isVisibleEnd}>
        <a
          className="link pagination__page-link"
          onClick={() => setPageNumber(pageNumber + 1)}
          href='#footer'
        >Далее
        </a>
      </li>
    </ul>
  );
}
