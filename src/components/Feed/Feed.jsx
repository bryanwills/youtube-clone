import { useContext } from 'react';
import { VideosContext } from '../../context/VideosContext';
import Carousel from '../Carousel/Carousel';
import avatars from '../common/avatars';

function Feed() {
  const { videos } = useContext(VideosContext);

  return (
    <section className="feed">
      <Carousel
        channelImage={avatars.a1}
        channelName="Dollie Blair"
        videos={videos}
      />

      <Carousel
        channelName="Recommended"
        videos={videos}
        isChannel={false}
        videoWidth={540}
        videoHeight={250}
      />

      <Carousel
        channelImage={avatars.a7}
        channelName="Food & Drink"
        isRecommended={true}
        subsNumber="2298343"
        videos={videos}
      />
    </section>
  );
}

export default Feed;
