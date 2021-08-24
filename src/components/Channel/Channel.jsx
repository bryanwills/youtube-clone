import { useContext } from 'react';
import { VideosContext } from '../../context/VideosContext';
import ChannelHeader from './ChannelHeader';
import ChannelBody from './ChannelBody';
import Carousel from '../Carousel/Carousel';
import banner from '../../assets/images/banner.png';
import avatars from '../common/avatars';

function Channel() {
  const { videos } = useContext(VideosContext);
  const channel_data = {
    banner: banner,
    banner_alt: 'Mountain',
    image: avatars.a1,
    name: 'Dollie Blair',
    subs_num: 2298343,
  };

  return (
    <section className="channel">
      <div className="channel-container">
        <ChannelHeader props={channel_data} />
        <ChannelBody />
        <Carousel
          isChannel={false}
          channelName="Dollie Blair's videos"
          videos={videos}
        />
      </div>
    </section>
  );
}

export default Channel;
