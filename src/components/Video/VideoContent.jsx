import { lazy } from 'react';
import VideoContentMeta from './VideoContentMeta';
import VideoDescription from './VideoDescription';
const VideoPlayer = lazy(() => import('../common/VideoPlayer'));

function VideoContent() {
  return (
    <section className="video-content">
      <header className="video-content-header">
        <VideoPlayer className="video-player--big" width={1280} height={720} />
        <VideoContentMeta />
      </header>
      <VideoDescription />
    </section>
  );
}

export default VideoContent;
