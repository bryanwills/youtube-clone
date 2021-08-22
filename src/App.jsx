import { Fragment, useEffect } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  useEffect(() => {
    const rootEl = document.querySelector('#root');
    rootEl.style.minHeight = `${window.innerHeight}px`;
  }, []);

  return (
    <Fragment>
      <Header />
      <section className="content">
        <Sidebar />
      </section>
    </Fragment>
  );
}

export default App;
