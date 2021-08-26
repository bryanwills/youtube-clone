import VideoMenu from './VideoMenu';
import channel from '../../store/channel';
import convert from '../../functions/convert';

function VideoContentMeta() {
  const channelVideoPrimary = channel.videos.primary;

  return (
    <section className="video-content-header-meta">
      <div className="video-content-header-meta-item">
        <h1 className="video-content-header-meta__title">
          {channelVideoPrimary.title}
        </h1>
        <span className="video-content-header-meta__views">
          {convert(channelVideoPrimary.views)}{' '}
          {channelVideoPrimary.views !== 1 ? 'views' : 'view'}
        </span>
      </div>

      <VideoMenu
        likes={channelVideoPrimary.likes}
        dislikes={channelVideoPrimary.dislikes}
      />
    </section>
  );
}

export default VideoContentMeta;
