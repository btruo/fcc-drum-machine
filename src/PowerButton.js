import {useState} from "react";

// Power Button to toggle the drum-kit on and off.
function PowerButton() {

  const [power, setPower] = useState(false);
  function handleClick() {
    setPower(power => !power);
  }
  return (
    <div className="power">
      <button onClick={handleClick} className="powerButton">
        {power ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}
export default PowerButton;