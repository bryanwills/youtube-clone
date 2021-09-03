import { ReactComponent as NotificationsIcon } from "../../assets/icons/notifications.svg";

function NotificationsButton({ quantity }) {
    return (
        <button className="notifications-button" type="button" aria-label="show notifications">
            <NotificationsIcon className="notifications-button__icon" />
            {quantity > 0 && <span className="notifications-button__quantity">{quantity}</span>}
        </button>
    );
}

NotificationsButton.defaultProps = {
    quantity: "0",
};

export default NotificationsButton;
