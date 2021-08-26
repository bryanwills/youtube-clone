function VideoPlayer({ className, width, height, link }) {
  return (
    <iframe
      className={`video-player ${className}`}
      width={width}
      height={height}
      src={link}
      title="YouTube video player"
      allow="accelerometer; encrypted-media; picture-in-picture"
      allowFullScreen
    />
  );
}

VideoPlayer.defaultProps = {
  className: '',
  width: 560,
  height: 315,
  link: '',
};

export default VideoPlayer;
