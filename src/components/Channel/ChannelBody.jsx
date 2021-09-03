import ChannelNav from "./ChannelNav";
import ChannelPlayer from "./ChannelPlayer";
import ChannelPinned from "./ChannelPinned";

function ChannelBody() {
    return (
        <main className="channel-body">
            <ChannelNav />
            <ChannelPlayer />
            <ChannelPinned />
        </main>
    );
}

export default ChannelBody;
