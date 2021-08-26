import SubsItem from './SubsItem';
import avatars from '../../store/avatars';

function SubsList() {
  return (
    <section className="subs">
      <h4 className="subs__title">Subscriptions</h4>

      <ul className="subs-list">
        <SubsItem to="/channel" name="Dollie Blair" image={avatars.a1} />
        <SubsItem to="/channel" name="Nora Francis" image={avatars.a2} />
        <SubsItem to="/channel" name="Belle Briggs" image={avatars.a3} />
        <SubsItem to="/channel" name="Eunice Cortez" image={avatars.a4} />
        <SubsItem to="/channel" name="Emma Hanson" image={avatars.a5} />
        <SubsItem to="/channel" name="Leah Berry" image={avatars.a6} />
      </ul>
    </section>
  );
}

export default SubsList;
