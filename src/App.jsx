import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { VideosContext } from './context/VideosContext';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Channel from './components/Channel/Channel';
import './assets/styles/main.scss';

function App() {
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
    <Router>
      <Header />

      <section className="content">
        <Sidebar />

        <VideosContext.Provider value={{ videos, setVideos }}>
          <Switch>
            <Route exact path="/" component={Feed} />
            <Route path="/channel" component={Channel} />
          </Switch>
        </VideosContext.Provider>
      </section>
    </Router>
  );
}

export default App;
