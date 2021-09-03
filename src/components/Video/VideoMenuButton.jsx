import convert from "../../functions/convert";

function VideoMenuButton({ icon, statsNum, text }) {
    const Icon = icon;

    return (
        <button className="video-menu__button" type="button">
            {icon && <Icon className="video-menu__button__icon" />}
            {statsNum && <span className="video-menu__button__text">{convert(statsNum)}</span>}
            {text && <span className="video-menu__button__text">{text}</span>}
        </button>
    );
}

VideoMenuButton.defaultProps = {
    icon: "",
    statsNum: "",
    text: "",
};

export default VideoMenuButton;
