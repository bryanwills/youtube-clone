import ChannelNavItem from "./ChannelNavItem";
import icons from "../../store/icons";

function ChannelNav() {
    const SearchIcon = icons.Search;

    return (
        <nav className="channel-nav">
            <ul className="channel-nav-list">
                <ChannelNavItem routeTo="/channel" text="Home" />
                <ChannelNavItem routeTo="/channel/videos" text="Videos" />
                <ChannelNavItem routeTo="/channel/playlists" text="Playlists" />
                <ChannelNavItem routeTo="/channel/channels" text="Channels" />
                <ChannelNavItem routeTo="/channel/discussion" text="Discussion" />
                <ChannelNavItem routeTo="/channel/about" text="About" />
            </ul>

            <button className="channel-nav__btn" type="button" aria-label="show search input">
                <SearchIcon className="channel-nav__btn__icon" />
            </button>
        </nav>
    );
}

export default ChannelNav;
