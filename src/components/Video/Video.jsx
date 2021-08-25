import VideoContent from './VideoContent';
import VideoFeed from './VideoFeed';

function Video() {
  return (
    <section className="video">
      <div className="video-container">
        <VideoContent />
        <VideoFeed />
      </div>
    </section>
  );
}

export default Video;
