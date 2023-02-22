import { useState, useEffect } from "react";

// DrumKeys identifies which key was pressed to play the audio file.

// main function.
function DrumKeys() {
		const [string, setString] = useState(' ');

	
	useEffect(() => {
		// handleKeyDown(event) tracks whether the event.key pressed corresponds to a valid key to play. If so, calls the handleClick() method. 
		function handleKeyDown(event) {
			// keyMapping object maps each key to its audioPath object (which has the url to the audio)
			const keyMapping = {
				'q': 'heater1',
				'w': 'heater2',
				'e': 'heater3',
				'a': 'heater4',
				's': 'clap',
				'd': 'openhh',
				'z': 'kicknhat',
				'x': 'kick',
				'c': 'closedhh',
			}
			// assign buttonId to the mapped key when pressed. 
			const buttonId = keyMapping[event.key]
			if (buttonId) {
				handleClick(buttonId);
			}
		}

		// window.addEventListener(): window is the target so that the user just has to focus on the window, not on the specific button. 
		// addEventListener('keydown', handleKeyDown) waits for the a key to be pressed via ('keydown'), then calls handleKeyDown function. 
		window.addEventListener('keydown', handleKeyDown);
		// cleanup function to pass empty array. prevents doubling up on key press.
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	// audioPaths object containing all links
	const audioPaths = {
		heater1: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
		heater2: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
		heater3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
		heater4: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
		clap: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
		openhh: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
		kicknhat: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
		kick: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
		closedhh: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
	}

	// handleClick is passed the prop (buttonId), corresponding to the drum type input.
	function handleClick(buttonId) {
		// then plays the audio file with audio.play()
		const audio = new Audio(audioPaths[buttonId]);
		audio.play();
		// update string on display
		setString(buttonId)
	}

	// function DrumString() {
	// 	const [string, setString] = useState('');
	// 	function handleString () {
	// 		setString => (string => audioPaths[buttonId]);
	// 	}

	return (
		<>
			<button className="drum-pad" id='heater1' onClick={() => handleClick('heater1')}>
				<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip" id="Q"></audio>
				Q
			</button>
			<button className="drum-pad" id='heater2' onClick={() => handleClick('heater2')}><audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' className="clip" id="W"></audio>
				W
			</button>
			<button className="drum-pad" id='heater3' onClick={() => handleClick('heater3')}><audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' className="clip" id="E"></audio>E</button>
			<button className="drum-pad" id='heater4' onClick={() => handleClick('heater4')}><audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' className="clip" id="A"></audio>A</button>
			<button className="drum-pad" id='clap' onClick={() => handleClick('clap')}><audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' className="clip" id="S"></audio>S</button>
			<button className="drum-pad" id='openhh' onClick={() => handleClick('openhh')}><audio src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' className="clip" id="D"></audio>D</button>
			<button className="drum-pad" id='kicknhat' onClick={() => handleClick('kicknhat')}><audio src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' className="clip" id="Z"></audio>Z</button>
			<button className="drum-pad" id='kick' onClick={() => handleClick('kick')}><audio src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' className="clip" id="X"></audio>X</button>
			<button className="drum-pad" id='closedhh' onClick={() => handleClick('closedhh')}><audio src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' className="clip" id="C"></audio>C</button>
<p className="drum-display">Drum: {string? string : ' '}</p>
		</>
	)
}
	export default DrumKeys;