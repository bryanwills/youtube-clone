import { useEffect, useState } from 'react';
import Carousel from '../Carousel/Carousel';
import avatars from '../common/avatars';

function Feed() {
  const [videos, setVideos] = useState([]);
  const fetch_data = {
    url: 'https://jsonplaceholder.typicode.com/photos',
    limit: 10,
  };

  useEffect(() => {
    fetch(fetch_data.url)
      .then((response) => response.json())
      .then((data) =>
        setVideos(
          data.splice(
            fetch_data.limit,
            data.length - (data.length - fetch_data.limit)
          )
        )
      );
  }, [fetch_data.limit, fetch_data.url]);

  return (
    <section className="feed">
      <Carousel
        channelImage={avatars.a1}
        channelName="Dollie Blair"
        videos={videos}
      />

      <Carousel
        channelName="Recommended"
        videos={videos}
        videoWidth={540}
        videoHeight={250}
      />

      <Carousel
        channelImage={avatars.a7}
        channelName="Food & Drink"
        isRecommended={true}
        subsNumber="2298343"
        videos={videos}
      />
    </section>
  );
}

export default Feed;
