import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import SubsList from './SubsList';
import icons from '../../store/icons';

function Sidebar() {
  const SettingsIcon = icons.Settings;
  return (
    <aside className="sidebar">
      <Nav />
      <SubsList />

      <NavLink
        to="/settings"
        className="sidebar-link"
        activeClassName="sidebar-link--active"
        exact>
        <SettingsIcon className="sidebar-link__icon" />
        <span className="sidebar-link__text">Settings</span>
      </NavLink>
    </aside>
  );
}

export default Sidebar;
