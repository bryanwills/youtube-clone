import { useState } from "react";
import convert from "../../functions/convert";

function SubscribeButton({ subsNumber }) {
    const [subbed, setSubbed] = useState(false);

    const handleClick = () => {
        setSubbed(!subbed);
    };

    return (
        <button
            className={`subscribe-btn ${subbed ? "subscribe-btn--subbed" : ""}`}
            type="button"
            aria-label="subscribe to the channel"
            onClick={handleClick}>
            {subbed ? "Subscribed" : "Subscribe"} {convert(subsNumber)}
        </button>
    );
}

SubscribeButton.defaultProps = {
    subsNumber: 0,
};

export default SubscribeButton;
