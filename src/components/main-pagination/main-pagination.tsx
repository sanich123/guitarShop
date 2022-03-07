import cn from 'classnames';
import { useGetGuitarsQuery } from '../../redux/guitars-api';
import Loader from '../loader/loader';

interface MainPaginationProps {
  setPageNumber: (arg: number) => void,
  pageNumber: number,
  cardsOnPage: number,
}

export default function MainPagination({setPageNumber, pageNumber, cardsOnPage}: MainPaginationProps) {
  const {data, isLoading} = useGetGuitarsQuery('');

  if (isLoading) {
    return <Loader/>;
  }

  const count = data.length / cardsOnPage;
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
