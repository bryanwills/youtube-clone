import { ReactComponent as DefaultIcon } from '../../assets/icons/default.svg';

function IconButton({ icon, btnClass, iconClass }) {
  const Icon = icon;
  return (
    <button className={`icon-btn ${btnClass}`} type="button">
      <Icon className={`icon-btn__icon ${iconClass}`} />
    </button>
  );
}

IconButton.defaultProps = {
  icon: DefaultIcon,
  btnClass: '',
  iconClass: '',
};

export default IconButton;
