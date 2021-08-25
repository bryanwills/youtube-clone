import VideoMenu from './VideoMenu';
import convert from '../common/convert';

function VideoContentMeta() {
  const video_data = {
    title: 'React in 100 Seconds',
    description:
      'React is a little JavaScript library with a big influence over the webdev world. Learn the basics of React in 100 Seconds.',
    views: 440846,
    likes: 23000,
    dislikes: 141,
  };

  return (
    <section className="video-content-header-meta">
      <div className="video-content-header-meta-item">
        <h1 className="video-content-header-meta__title">{video_data.title}</h1>
        <span className="video-content-header-meta__views">
          {convert(video_data.views)}{' '}
          {video_data.views !== 1 ? 'views' : 'view'}
        </span>
      </div>

      <VideoMenu likes={video_data.likes} dislikes={video_data.dislikes} />
    </section>
  );
}

export default VideoContentMeta;
