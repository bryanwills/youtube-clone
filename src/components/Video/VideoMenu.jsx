import VideoMenuButton from './VideoMenuButton';
import icons from '../common/icons';

function VideoMenu({ likes, dislikes }) {
  const MoreIcon = icons.More;

  return (
    <div className="video-menu">
      <VideoMenuButton icon={icons.Like} statsNum={likes} />
      <VideoMenuButton icon={icons.Dislike} statsNum={dislikes} />
      <VideoMenuButton icon={icons.Share} text="Share" />

      <button className="video-menu-more__btn" type="button">
        <MoreIcon className="video-menu-more__btn__icon" />
      </button>
    </div>
  );
}

VideoMenu.defaultProps = {
  likes: 0,
  dislikes: 0,
};

export default VideoMenu;
