import { useContext } from 'react';
import { VideosContext } from '../../context/VideosContext';
import ToggleSwitch from '../common/ToggleSwitch';
import Carousel from '../Carousel/Carousel';

function VideoFeed() {
  const { videos } = useContext(VideosContext);

  return (
    <section className="video-feed">
      <header className="video-feed-header">
        <h2 className="video-feed-header__title">Next</h2>
        <ToggleSwitch text="Autoplay" />
      </header>

      <Carousel
        className="carousel--vertical"
        isChannel={false}
        needArrows={false}
        videos={videos}
        videoWidth={367}
        videoHeight={213}
      />
    </section>
  );
}

export default VideoFeed;
