import { useEffect, useRef, useState } from 'react';

function ToggleSwitch({ text }) {
  const checkboxRef = useRef();
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    checkboxRef.current.checked = checked;
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
          ref={checkboxRef}
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
