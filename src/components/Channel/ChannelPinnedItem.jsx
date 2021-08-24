import { Link } from 'react-router-dom';

function ChannelPinnedItem({ image, name }) {
  return (
    <li className="channel-pinned-list-item">
      <Link to="/channel" className="channel-pinned-list-item__link">
        <img
          className="channel-pinned-list-item__link__img"
          src={image}
          alt=""
        />
        <p className="channel-pinned-list-item__link__name">{name}</p>
      </Link>
    </li>
  );
}

ChannelPinnedItem.defaultProps = {
  image: '',
  name: '',
};

export default ChannelPinnedItem;
