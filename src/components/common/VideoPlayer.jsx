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
  width: 424,
  height: 238,
  link: 'https://www.youtube-nocookie.com/embed/Tn6-PIqc4UM',
};

export default VideoPlayer;
