import { navLinks } from '../../../../utils/const';

export default function NavLinks() {

  return (
    <ul className="footer__nav-list">
      {navLinks.map((link) => (
        <li key={link} className="footer__nav-list-item">
          <a className="link" href="#top">{link}</a>
        </li>
      ))}
    </ul>
  );
}
