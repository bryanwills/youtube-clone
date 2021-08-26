import { useContext } from 'react';
import { VideosContext } from '../../context/VideosContext';
import Carousel from '../Carousel/Carousel';
import avatars from '../../store/avatars';

function Feed() {
  const { videos } = useContext(VideosContext);
  const carousel_props = {
    channel: {
      channelImage: avatars.a1,
      channelName: 'Dollie Blair',
      videos: videos,
    },
    channel_recommended: {
      channelImage: avatars.a7,
      channelName: 'Food & Drink',
      isRecommended: true,
      subsNumber: 2298343,
      videos: videos,
    },
    recommended: {
      channelName: 'Recommended',
      isChannel: false,
      videos: videos,
      videoWidth: 540,
      videoHeight: 250,
    },
  };

  return (
    <section className="feed">
      <Carousel props={carousel_props.channel} />
      <Carousel props={carousel_props.recommended} />
      <Carousel props={carousel_props.channel_recommended} />
    </section>
  );
}

export default Feed;
