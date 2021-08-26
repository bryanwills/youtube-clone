import convert from '../../functions/convert';

function ChannelMeta({ image, name, subsNumber }) {
  return (
    <div className="channel-meta">
      <img className="channel-meta__img" src={image} alt="Avatar" />
      <div className="channel-meta-text">
        <h4 className="channel-meta-text__name">{name}</h4>
        <span className="channel-meta-text__subs">
          {convert(subsNumber)} subscribed
        </span>
      </div>
    </div>
  );
}

ChannelMeta.defaultProps = {
  image: '',
  name: '',
  subsNumber: 0,
};

export default ChannelMeta;
