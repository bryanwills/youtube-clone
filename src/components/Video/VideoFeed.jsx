import { useContext } from 'react';
import { VideosContext } from '../../context/VideosContext';
import ToggleSwitch from '../common/ToggleSwitch';
import Carousel from '../Carousel/Carousel';

function VideoFeed() {
  const { videos } = useContext(VideosContext);
  const carousel_props = {
    className: 'carousel--vertical',
    isChannel: false,
    needArrows: false,
    videos: videos,
    videoWidth: 376,
    videoHeight: 213,
  };

  return (
    <section className="video-feed">
      <header className="video-feed-header">
        <h2 className="video-feed-header__title">Next</h2>
        <ToggleSwitch text="Autoplay" />
      </header>

      <Carousel props={carousel_props} />
    </section>
  );
}

export default VideoFeed;
