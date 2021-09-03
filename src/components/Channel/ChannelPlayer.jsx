import { lazy } from "react";
import { Link } from "react-router-dom";
import channel from "../../store/channel";
import convert from "../../functions/convert";
const VideoPlayer = lazy(() => import("../common/VideoPlayer"));

function ChannelPlayer() {
    const channelVideoPrimary = channel.videos.primary;

    return (
        <section className="channel-player">
            <VideoPlayer
                className="video-player--channel"
                width={424}
                height={238}
                link={channelVideoPrimary.link}
            />

            <div className="channel-player-text">
                <div>
                    <h2 className="channel-player-text__title">
                        <Link className="channel-player-text__title__link" to="/video/2">
                            {channelVideoPrimary.title}
                        </Link>
                    </h2>
                    <p className="channel-player-text__description">
                        {channelVideoPrimary.description}
                    </p>
                </div>

                <div>
                    <span className="channel-player-text__meta">
                        {convert(channelVideoPrimary.views)}
                    </span>
                    {/* TODO: Automate date calculation */}
                    <span className="channel-player-text__meta">6 months ago</span>
                </div>
            </div>
        </section>
    );
}

export default ChannelPlayer;
