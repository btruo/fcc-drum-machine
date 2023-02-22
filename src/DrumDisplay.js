import { useState } from "react";

// Drum Display to show what drum was s truck.
// TODO: when button is clicked, string associated displayed.
// whenever a key or button is pressed, setDisplay to the corresponding string associated with that button.
function DrumDisplay() {

  const [display, setDisplay] = useState('initial');
  function handleClick() {
    setDisplay(display + "test");
    // setPower(power => !power);
  }
  return (
    <div>
      {display}
      {/* <button onClick={handleClick} className="powerButton">
        {display}
      </button> */}
    </div>
  );
}
export default DrumDisplay;