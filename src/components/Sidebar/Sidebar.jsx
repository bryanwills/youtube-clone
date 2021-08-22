import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import icons from '../common/icons';
import Nav from './Nav';
import SubsList from './SubsList';

function Sidebar() {
  const SettingsIcon = icons.Settings;

  useEffect(() => {
    const headerEl = document.querySelector('.header');
    const sidebarEl = document.querySelector('.sidebar');
    sidebarEl.style.maxHeight = `${
      window.innerHeight - headerEl.offsetHeight
    }px`;
  }, []);

  return (
    <aside className="sidebar">
      <Nav />
      <SubsList />

      <NavLink
        to="/settings"
        className="sidebar-link"
        activeClassName="sidebar-link--active"
        exact
      >
        <SettingsIcon className="sidebar-link__icon" />
        <span className="sidebar-link__text">Settings</span>
      </NavLink>
    </aside>
  );
}

export default Sidebar;
