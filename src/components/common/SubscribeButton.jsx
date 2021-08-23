import { useState } from 'react';
import convert from '../common/convert';

function SubscribeButton({ subsNumber }) {
  const [subbed, setSubbed] = useState(false);

  const handleClick = () => {
    setSubbed(!subbed);
  };

  return (
    <button
      className={`subscribe-btn ${subbed ? 'subscribe-btn--subbed' : ''}`}
      type="button"
      onClick={handleClick}>
      {subbed ? 'Subscribed' : 'Subscribe'} {convert(subsNumber)}
    </button>
  );
}

SubscribeButton.defaultProps = {
  subsNumber: 0,
};

export default SubscribeButton;
