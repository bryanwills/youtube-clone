import { Link } from 'react-router-dom';
import SubscribeButton from '../common/SubscribeButton';
import CarouselArrows from './CarouselArrows';
import CarouselVideo from './CarouselVideo';

// TODO: Refactor props structure
function Carousel({
  channelImage,
  channelName,
  isChannel,
  isRecommended,
  subsNumber,
  videos,
  videoWidth,
  videoHeight,
}) {
  return (
    <section className="carousel">
      <header className="carousel-header">
        <section className="carousel-header-items">
          {isChannel ? (
            <Link className="carousel-header-items-link" to="/channel">
              <img
                className="carousel-header__image"
                src={channelImage}
                alt=""
              />
              <h2 className="carousel-header__name">{channelName}</h2>
            </Link>
          ) : (
            <h2 className="carousel-header__name">{channelName}</h2>
          )}

          {isRecommended && (
            <p className="carousel-header__subtitle">
              Recommended channel for you
            </p>
          )}
        </section>

        <section className="carousel-header-items">
          {isRecommended && <SubscribeButton subsNumber={subsNumber} />}
          <CarouselArrows divClassName="carousel-arrows--feed" />
        </section>
      </header>

      <section className="carousel-videos">
        <ul className="carousel-videos-list">
          {videos.length > 0 &&
            videos.map((vid) => (
              <CarouselVideo
                key={vid.id}
                title={vid.title}
                image={vid.url}
                alt={vid.title}
                imgWidth={videoWidth}
                imgHeight={videoHeight}
              />
            ))}
        </ul>
      </section>
    </section>
  );
}

Carousel.defaultProps = {
  channelImage: '',
  channelName: '',
  isChannel: true,
  isRecommended: false,
  subsNumber: 0,
  videos: [],
  videoWidth: 250,
  videoHeight: 150,
};

export default Carousel;
