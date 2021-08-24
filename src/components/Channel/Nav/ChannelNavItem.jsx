import { NavLink } from 'react-router-dom';

function ChannelNavItem({ text, routeTo }) {
  return (
    <li className="channel-nav-item">
      <NavLink
        className="channel-nav-item__link"
        activeClassName="channel-nav-item__link--active"
        to={routeTo}
        exact>
        {text}
      </NavLink>
    </li>
  );
}

ChannelNavItem.defaultProps = {
  text: '',
  routeTo: '/channel',
};

export default ChannelNavItem;
