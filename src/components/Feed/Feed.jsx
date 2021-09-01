import { useContext } from 'react';
import { VideosContext } from '../../context/VideosContext';
import Carousel from '../Carousel/Carousel';
import channel from '../../store/channel';
import avatars from '../../store/avatars';

function Feed() {
  const { videos } = useContext(VideosContext);
  const carousel_props = {
    channel: {
      channelImage: channel.image,
      title: channel.name,
      videos: videos,
    },
    recommended_channel: {
      channelImage: avatars.a6,
      title: 'Food & Drink',
      isRecommended: true,
      subsNumber: 2298343,
      videos: videos,
    },
    recommended_videos: {
      title: 'Recommended',
      isChannel: false,
      videos: videos,
      videoWidth: 540,
      videoHeight: 250,
      className: 'carousel--large',
    },
  };

  return (
    <section className="feed">
      <Carousel props={carousel_props.channel} />
      <Carousel props={carousel_props.recommended_videos} />
      <Carousel props={carousel_props.recommended_channel} />
    </section>
  );
}

export default Feed;
