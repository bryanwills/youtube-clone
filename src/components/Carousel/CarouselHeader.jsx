import { Link } from 'react-router-dom';
import SubscribeButton from '../common/SubscribeButton';
import CarouselArrows from './CarouselArrows';

function CarouselHeader({
  isChannel,
  isRecommended,
  needArrows,
  channelImage,
  title,
  subsNumber,
}) {
  return (
    <header className="carousel-header">
      <section className="carousel-header-items">
        {isChannel ? (
          <Link className="carousel-header-items-link" to="/channel">
            <img className="carousel-header__image" src={channelImage} alt="" />
            <h2 className="carousel-header__name">{title}</h2>
          </Link>
        ) : (
          <h2 className="carousel-header__name">{title}</h2>
        )}

        {isRecommended && (
          <p className="carousel-header__subtitle">
            Recommended channel for you
          </p>
        )}
      </section>

      <section className="carousel-header-items">
        {isRecommended && <SubscribeButton subsNumber={subsNumber} />}
        {needArrows && <CarouselArrows divClassName="carousel-arrows--feed" />}
      </section>
    </header>
  );
}

CarouselHeader.defaultProps = {
  isChannel: true,
  isRecommended: false,
  needArrows: true,
  channelImage: '',
  title: '',
  subsNumber: 0,
};

export default CarouselHeader;
