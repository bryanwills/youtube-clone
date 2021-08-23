import ChannelHeader from './ChannelHeader';
import banner from '../../assets/images/banner.png';
import avatars from '../common/avatars';

function Channel() {
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
      </div>
    </section>
  );
}

export default Channel;
