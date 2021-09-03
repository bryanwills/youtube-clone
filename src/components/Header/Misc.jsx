import IconButton from "../common/IconButton";
import NotificationsButton from "./NotificationsButton";
import icons from "../../store/icons";

function Misc() {
    return (
        <section className="misc">
            <div className="misc-icons">
                <IconButton icon={icons.Stream} ariaLabel="launch stream" />
                <IconButton icon={icons.Apps} ariaLabel="show apps" />
                <NotificationsButton quantity="3" />
            </div>
            <IconButton
                btnClass="icon-btn--profile"
                icon={icons.Profile}
                ariaLabel="account menu"
            />
        </section>
    );
}

export default Misc;
