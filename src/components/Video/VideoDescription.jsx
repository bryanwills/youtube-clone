import { Link } from 'react-router-dom';
import SubscribeButton from '../common/SubscribeButton';
import avatars from '../common/avatars';

function VideoDescription() {
  const video_data = {
    channel_name: 'Dollie Blair',
    channel_img: avatars.a1,
    channel_subs_num: 2298343,
    description:
      'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. ',
    published: '9 Sep 2020',
  };

  return (
    <section className="video-content-description">
      <div className="video-content-description-item">
        <Link className="video-content-description__link" to="/channel">
          <img
            className="video-content-description__link__img"
            src={video_data.channel_img}
            alt="Channel avatar"
          />
        </Link>

        <div className="video-content-description-text">
          <Link className="video-content-description-text__link" to="/channel">
            <h4 className="video-content-description-text__link__name">
              {video_data.channel_name}
            </h4>
          </Link>
          <p className="video-content-description-text__date">
            Published on {video_data.published}
          </p>
          <p className="video-content-description-text__description">
            {video_data.description}
          </p>
          <button
            className="video-content-description-text__btn"
            type="button"
            aria-label="show more description">
            Show more
          </button>
        </div>
      </div>

      <SubscribeButton subsNumber={video_data.channel_subs_num} />
    </section>
  );
}

export default VideoDescription;
