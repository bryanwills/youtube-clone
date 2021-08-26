import { lazy } from 'react';
import VideoContentMeta from './VideoContentMeta';
import VideoDescription from './VideoDescription';
import channel from '../../store/channel';
const VideoPlayer = lazy(() => import('../common/VideoPlayer'));

function VideoContent() {
  return (
    <section className="video-content">
      <header className="video-content-header">
        <VideoPlayer
          className="video-player--big"
          link={channel.videos.primary.link}
        />
        <VideoContentMeta />
      </header>
      <VideoDescription />
    </section>
  );
}

export default VideoContent;
