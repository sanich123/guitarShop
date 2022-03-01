import { media } from '../../../utils/const';

export default function Social() {

  return (
    <ul className="socials__list">
      {media.map((item) => (
        <li key={item} className="socials-item">
          <a className="socials__link" href={`https://www.${item}.com/`} aria-label={item}>
            <svg className="socials__icon" width="24" height="24" aria-hidden="true">
              <use xlinkHref={`#icon-${item}`}/>
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
