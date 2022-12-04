import Timer from "./components/LastSeenTimer.tsx";
import React, { useState } from "react";

function App() {

	const [enteredNumber, setEnteredNumber] = React.useState(0);
	const [lastSeen, setLastSeen] = useState(0);

	const setNumberHandler = (val) => {
		setEnteredNumber(val);
	}

	const submitHandler = () => {
		setLastSeen(enteredNumber);
	}

	return (
		<div className="app">
			<h2>The current epoch unix timestamp</h2>
			<span>Enter a timestamp:    </span>
			<input type='number' onInput={e => setNumberHandler(e.target.value)}></input>
			<button onClick={submitHandler} value='Submit'>Check</button>
			<Timer enteredData={Number(lastSeen)} />
		</div>
	);
}

export default App;
