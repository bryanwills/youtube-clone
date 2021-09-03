import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";

function MenuButton({ buttonClass, clickHandler }) {
    return (
        <button
            className={`menu-btn ${buttonClass}`}
            type="button"
            aria-label="open menu"
            onClick={clickHandler}>
            <MenuIcon className="menu-btn__icon" />
        </button>
    );
}

MenuButton.defaultProps = {
    buttonClass: "",
    clickHandler: () => null,
};

export default MenuButton;
