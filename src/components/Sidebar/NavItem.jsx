import { NavLink } from 'react-router-dom';
import { ReactComponent as DefaultIcon } from '../../assets/icons/default.svg';

function NavItem({ icon, text, routeTo }) {
  const Icon = icon;

  return (
    <li className="sidebar-nav-list-item">
      <NavLink
        className="sidebar-nav-list-item-link"
        activeClassName="sidebar-nav-list-item-link--active"
        to={routeTo}
        exact>
        <Icon className="sidebar-nav-list-item-link__icon" />
        <span className="sidebar-nav-list-item-link__text">{text}</span>
      </NavLink>
    </li>
  );
}

NavItem.defaultProps = {
  icon: DefaultIcon,
  text: '[list item]',
  routeTo: '/',
};

export default NavItem;
