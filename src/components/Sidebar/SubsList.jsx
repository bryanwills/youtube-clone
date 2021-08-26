import SubsItem from './SubsItem';
import channel from '../../store/channel';
import avatars from '../../store/avatars';

function SubsList() {
  return (
    <section className="subs">
      <h4 className="subs__title">Subscriptions</h4>

      <ul className="subs-list">
        <SubsItem to="/channel" name={channel.name} image={channel.image} />
        <SubsItem to="/channel" name="Nora Francis" image={avatars.a1} />
        <SubsItem to="/channel" name="Belle Briggs" image={avatars.a2} />
        <SubsItem to="/channel" name="Eunice Cortez" image={avatars.a3} />
        <SubsItem to="/channel" name="Emma Hanson" image={avatars.a4} />
        <SubsItem to="/channel" name="Leah Berry" image={avatars.a5} />
      </ul>
    </section>
  );
}

export default SubsList;
