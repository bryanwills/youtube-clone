import IconButton from '../common/IconButton';
import NotificationsButton from './NotificationsButton';
import { ReactComponent as StreamIcon } from '../../assets/icons/stream.svg';
import { ReactComponent as AppsIcon } from '../../assets/icons/apps.svg';
import { ReactComponent as ProfileIcon } from '../../assets/icons/profile.svg';

function Misc() {
  return (
    <section className="misc">
      <div className="misc-icons">
        <IconButton icon={StreamIcon} />
        <IconButton icon={AppsIcon} />
        <NotificationsButton quantity="3" />
      </div>
      <IconButton btnClass="icon-btn--profile" icon={ProfileIcon} />
    </section>
  );
}

export default Misc;
