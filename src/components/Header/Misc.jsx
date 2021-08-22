import IconButton from '../common/IconButton';
import NotificationsButton from './NotificationsButton';
import icons from '../common/icons';

function Misc() {
  return (
    <section className="misc">
      <div className="misc-icons">
        <IconButton icon={icons.Stream} />
        <IconButton icon={icons.Apps} />
        <NotificationsButton quantity="3" />
      </div>
      <IconButton btnClass="icon-btn--profile" icon={icons.Profile} />
    </section>
  );
}

export default Misc;
