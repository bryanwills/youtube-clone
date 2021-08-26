import ChannelMeta from './ChannelMeta';
import SubscribeButton from '../common/SubscribeButton';
import icons from '../../store/icons';
import ProfileIcon from '../../assets/icons/profile.svg';

function ChannelHeader({ props }) {
  const BellIcon = icons.Notifications;

  return (
    <header className="channel-header">
      <img
        className="channel-header__banner"
        src={props.banner}
        alt={`${props.name}'s banner`}
      />

      <section className="channel-header-meta">
        <div className="channel-header-meta-items">
          <ChannelMeta
            image={props.image || ProfileIcon}
            name={props.name}
            subsNumber={props.subscribers_num}
          />
        </div>

        <div className="channel-header-meta-items">
          <button
            className="channel-header-meta-items__bell"
            type="button"
            aria-label="setup channel notifications">
            <BellIcon className="channel-header-meta-items__bell__icon" />
          </button>
          <SubscribeButton subsNumber={props.subscribers_num} />
        </div>
      </section>
    </header>
  );
}

ChannelHeader.defaultProps = {
  props: {
    name: '',
    image: '',
    banner: '',
    subscribers_num: 0,
  },
};

export default ChannelHeader;
