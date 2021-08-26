import { Link } from 'react-router-dom';
import SubscribeButton from '../common/SubscribeButton';
import channel from '../../store/channel';

function VideoDescription() {
  const channelVideoPrimary = channel.videos.primary;

  return (
    <section className="video-content-description">
      <div className="video-content-description-item">
        <Link className="video-content-description__link" to="/channel">
          <img
            className="video-content-description__link__img"
            src={channel.image}
            alt="Channel avatar"
          />
        </Link>

        <div className="video-content-description-text">
          <Link className="video-content-description-text__link" to="/channel">
            <h4 className="video-content-description-text__link__name">
              {channel.name}
            </h4>
          </Link>
          <p className="video-content-description-text__date">
            Published on {channelVideoPrimary.date}
          </p>
          <p className="video-content-description-text__description">
            {channelVideoPrimary.description}
          </p>
          <button
            className="video-content-description-text__btn"
            type="button"
            aria-label="show more description">
            Show more
          </button>
        </div>
      </div>

      <SubscribeButton subsNumber={channel.subscribers_num} />
    </section>
  );
}

export default VideoDescription;
