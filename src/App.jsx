import { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { VideosContext } from './context/VideosContext';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Channel from './components/Channel/Channel';
import Video from './components/Video/Video';
import './assets/styles/main.scss';

function App() {
  const { pathname } = useLocation();
  const [videos, setVideos] = useState([]);
  const fetch_data = {
    url: 'https://jsonplaceholder.typicode.com/photos',
    limit: 10,
  };

  useEffect(() => {
    const headerHeight = document.querySelector('.header').offsetHeight;
    const contentEl = document.querySelector('.content');
    contentEl.style.maxHeight = `calc(100vh - ${headerHeight}px)`;
  }, []);

  useEffect(() => {
    fetch(fetch_data.url)
      .then((response) => response.json())
      .then((data) => setVideos(data.splice(1, fetch_data.limit)));
  }, [fetch_data.limit, fetch_data.url]);

  return (
    <>
      <Header />

      <section className="content">
        {pathname !== '/video/2' && <Sidebar />}

        <VideosContext.Provider value={{ videos, setVideos }}>
          <Switch>
            <Route exact path="/" component={Feed} />
            <Route path="/channel" component={Channel} />
            <Route path="/video/2" component={Video} />
          </Switch>
        </VideosContext.Provider>
      </section>
    </>
  );
}

export default App;
