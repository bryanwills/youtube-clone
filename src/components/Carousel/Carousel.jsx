import CarouselHeader from './CarouselHeader';
import CarouselBody from './CarouselBody';

function Carousel({ props }) {
  return (
    <section className={`carousel ${props.className}`}>
      <CarouselHeader
        isChannel={props.isChannel}
        isRecommended={props.isRecommended}
        needArrows={props.needArrows}
        channelImage={props.channelImage}
        channelName={props.channelName}
        subsNumber={props.subsNumber}
      />

      <CarouselBody
        videos={props.videos}
        videoWidth={props.videoWidth}
        videoHeight={props.videoHeight}
      />
    </section>
  );
}

Carousel.defaultProps = {
  props: {
    className: '',
  },
};

export default Carousel;
