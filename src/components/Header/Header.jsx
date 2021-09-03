import MenuButton from "../common/MenuButton";
import Logo from "../Logo/Logo";
import Search from "./Search";
import Misc from "./Misc";

function Header() {
    return (
        <header className="header">
            <MenuButton buttonClass="menu-btn--header" />
            <Logo mode="light" linkClass="logo--header" />
            <Search labelClass="search-label--header" />
            <Misc />
        </header>
    );
}

export default Header;
