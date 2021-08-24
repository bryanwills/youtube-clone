import { Link } from 'react-router-dom';

function CarouselVideo({ title, image, alt, imgWidth, imgHeight }) {
  return (
    <li className="carousel-videos-list-item">
      <Link className="carousel-videos-list-item__link" to="/video/2">
        <img
          className="carousel-videos-list-item__link__img"
          src={image}
          alt={alt}
          width={imgWidth}
          height={imgHeight}
        />
        <p className="carousel-videos-list-item__link__title">{title}</p>
      </Link>
    </li>
  );
}

CarouselVideo.defaultProps = {
  title: '',
  image: '',
  alt: '',
  imgWidth: 250,
  imgHeight: 150,
};

export default CarouselVideo;
