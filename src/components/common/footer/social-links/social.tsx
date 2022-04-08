import { memo } from 'react';
import { media } from '../../../../utils/const';

function Social() {

  return (
    <ul className="socials__list">
      {media.map((network) => (
        <li key={network} className="socials-item">
          <a
            className="socials__link"
            href={`https://www.${network}.com/`}
            aria-label={network}
          >
            <svg
              className="socials__icon"
              width="24"
              height="24"
              aria-hidden="true"
            >
              <use xlinkHref={`#icon-${network}`} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default memo(Social);
