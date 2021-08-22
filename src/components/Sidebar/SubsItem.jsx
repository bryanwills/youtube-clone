import { Link } from 'react-router-dom';

function SubsItem({ to, image, name, alt }) {
  return (
    <li className="subs-list-item">
      <Link className="subs-list-item__link" to={to}>
        <img className="subs-list-item__link__img" src={image} alt={alt} />
        <span className="subs-list-item__link__text">{name}</span>
      </Link>
    </li>
  );
}

SubsItem.defaultProps = {
  to: '/channel',
  image: '',
  name: '',
  alt: '',
};

export default SubsItem;
