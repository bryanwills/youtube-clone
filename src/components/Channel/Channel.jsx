import { useContext } from 'react';
import { VideosContext } from '../../context/VideosContext';
import ChannelHeader from './ChannelHeader';
import ChannelBody from './ChannelBody';
import Carousel from '../Carousel/Carousel';
import banner from '../../assets/images/banner.png';
import avatars from '../../store/avatars';

function Channel() {
  const { videos } = useContext(VideosContext);

  const channel_data = {
    banner: banner,
    banner_alt: 'React Logo',
    image: avatars.a1,
    name: 'Dollie Blair',
    subs_num: 2298343,
  };

  const carousel_props = {
    isChannel: false,
    channelName: `${channel_data.name}'s videos`,
    videos: videos,
  };

  return (
    <section className="channel">
      <div className="channel-container">
        <ChannelHeader props={channel_data} />
        <ChannelBody />
        <Carousel props={carousel_props} />
      </div>
    </section>
  );
}

export default Channel;
