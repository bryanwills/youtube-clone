import { Fragment, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Channel from './components/Channel/Channel';

function App() {
  useEffect(() => {
    const headerHeight = document.querySelector('.header').offsetHeight;
    const contentEl = document.querySelector('.content');
    contentEl.style.maxHeight = `calc(100vh - ${headerHeight}px)`;
  }, []);

  return (
    <Fragment>
      <Header />
      <section className="content">
        <Sidebar />
        <Switch>
          <Route path="/" component={Feed} exact />
          <Route path="/channel" component={Channel} />
        </Switch>
      </section>
    </Fragment>
  );
}

export default App;
