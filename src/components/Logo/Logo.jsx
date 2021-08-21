import { Link } from 'react-router-dom';
import logoLight from '../../assets/images/logotype-light.png';
import logoDark from '../../assets/images/logotype-dark.png';

function Logo({ mode, linkClass, imgClass }) {
  return (
    <Link className={`logo ${linkClass}`} to="/">
      <img
        className={`logo__img ${imgClass}`}
        src={mode === 'light' ? logoLight : logoDark}
        alt="YouTube Logo"
      />
    </Link>
  );
}

Logo.defaultProps = {
  mode: 'light',
  linkClass: '',
  imgClass: '',
};

export default Logo;
