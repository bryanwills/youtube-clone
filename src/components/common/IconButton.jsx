import { ReactComponent as DefaultIcon } from "../../assets/icons/default.svg";

function IconButton({ icon, btnClass, iconClass, ariaLabel }) {
    const Icon = icon;
    return (
        <button className={`icon-btn ${btnClass}`} type="button" aria-label={ariaLabel}>
            <Icon className={`icon-btn__icon ${iconClass}`} />
        </button>
    );
}

IconButton.defaultProps = {
    icon: DefaultIcon,
    btnClass: "",
    iconClass: "",
    ariaLabel: "button containing icon",
};

export default IconButton;
