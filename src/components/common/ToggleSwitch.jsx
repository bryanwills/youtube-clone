import { useEffect, useState } from 'react';

function ToggleSwitch({ text }) {
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    const checkbox = document.querySelector('.toggle-switch__label__checkbox');
    checkbox.checked = checked;
  }, [checked]);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="toggle-switch">
      {text && <span className="toggle-switch__text">{text}</span>}
      <label
        className="toggle-switch__label"
        htmlFor="toggle-switch-input"
        onChange={handleChange}>
        <input
          className="toggle-switch__label__checkbox"
          name="toggle-switch"
          type="checkbox"
          id="toggle-switch-input"
        />
        <span className="toggle-switch__label__slider"></span>
      </label>
    </div>
  );
}

ToggleSwitch.defaultProps = {
  text: '',
};

export default ToggleSwitch;
