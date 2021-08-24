import VideoPlayer from '../common/VideoPlayer';
import convert from '../common/convert';

function ChannelPlayer() {
  const player_data = {
    title: 'React in 100 Seconds',
    description:
      'React is a little JavaScript library with a big influence over the webdev world. Learn the basics of React in 100 Seconds.',
    views: 440245,
    date: '6 months ago',
  };

  return (
    <section className="channel-player">
      <VideoPlayer className="video-player--channel" />

      <div className="channel-player-text">
        <div>
          <h4 className="channel-player-text__title">{player_data.title}</h4>
          <p className="channel-player-text__description">
            {player_data.description}
          </p>
        </div>

        <div>
          <span className="channel-player-text__meta">
            {convert(player_data.views)}
          </span>
          <span className="channel-player-text__meta">{player_data.date}</span>
        </div>
      </div>
    </section>
  );
}

export default ChannelPlayer;
