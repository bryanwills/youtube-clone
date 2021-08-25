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
  needArrows,
  subsNumber,
  videos,
  videoWidth,
  videoHeight,
  className,
}) {
  return (
    <section className={`carousel ${className}`}>
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
          {needArrows && (
            <CarouselArrows divClassName="carousel-arrows--feed" />
          )}
        </section>
      </header>

      <section className="carousel-videos">
        <ul className="carousel-videos-list">
          {videos.length > 0 &&
            videos.map((vid) => (
              <CarouselVideo
                key={vid.id}
                title={vid.title}
                image={vid.thumbnailUrl}
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
  needArrows: true,
  subsNumber: 0,
  videos: [],
  videoWidth: 250,
  videoHeight: 150,
  className: '',
};

export default Carousel;
