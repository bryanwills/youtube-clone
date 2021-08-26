import { useContext } from 'react';
import { VideosContext } from '../../context/VideosContext';
import ChannelHeader from './ChannelHeader';
import ChannelBody from './ChannelBody';
import Carousel from '../Carousel/Carousel';
import channel from '../../store/channel';

function Channel() {
  const { videos } = useContext(VideosContext);

  const carousel_props = {
    isChannel: false,
    title: `${channel.name}'s videos`,
    videos: videos,
  };

  return (
    <section className="channel">
      <div className="channel-container">
        <ChannelHeader props={channel} />
        <ChannelBody />
        <Carousel props={carousel_props} />
      </div>
    </section>
  );
}

export default Channel;
