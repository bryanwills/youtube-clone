import VideoPlayer from '../common/VideoPlayer';
import VideoContentMeta from './VideoContentMeta';

function VideoContent() {
  return (
    <section className="video-content">
      <header className="video-content-header">
        <VideoPlayer className="video-player--big" width={1280} height={720} />
        <VideoContentMeta />
      </header>
    </section>
  );
}

export default VideoContent;
