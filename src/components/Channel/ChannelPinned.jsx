import ChannelPinnedItem from "./ChannelPinnedItem";
import avatars from "../../store/avatars";

function ChannelPinned() {
    return (
        <section className="channel-pinned">
            <h4 className="channel-pinned__title">Recommended channels</h4>
            <ul className="channel-pinned-list">
                <ChannelPinnedItem image={avatars.a1} name="Flora Benson" />
                <ChannelPinnedItem image={avatars.a2} name="Violet Cobb" />
                <ChannelPinnedItem image={avatars.a3} name="Phillip Mullins" />
            </ul>
        </section>
    );
}

export default ChannelPinned;
