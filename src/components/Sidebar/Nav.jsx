import NavItem from './NavItem';
import icons from '../common/icons';

function Nav() {
  const ChevronDown = icons.ChevronDown;

  return (
    <nav className="sidebar-nav">
      <ul className="sidebar-nav-list">
        <NavItem routeTo="/" icon={icons.Home} text="Home" />
        <NavItem routeTo="/trending" icon={icons.Trending} text="Trending" />
        <NavItem
          routeTo="/subscriptions"
          icon={icons.Subscriptions}
          text="Subscriptions"
        />
      </ul>

      <ul className="sidebar-nav-list">
        <NavItem routeTo="/library" icon={icons.Library} text="Library" />
        <NavItem routeTo="/history" icon={icons.History} text="History" />
        <NavItem routeTo="/later" icon={icons.WatchLater} text="Watch Later" />
        <NavItem routeTo="/favorites" icon={icons.Favorites} text="Favorites" />
        <NavItem
          routeTo="/liked"
          icon={icons.LikedVideos}
          text="Liked Videos"
        />
        <NavItem routeTo="/music" icon={icons.Music} text="Music" />
        <NavItem routeTo="/games" icon={icons.Games} text="Games" />
      </ul>

      <button className="sidebar-link sidebar-link--show-more" type="button">
        <span className="sidebar-link__icon">
          <ChevronDown />
        </span>
        <span className="sidebar-link__text">Show More</span>
      </button>
    </nav>
  );
}

export default Nav;
