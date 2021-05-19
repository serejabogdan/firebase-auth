import React from 'react';
import './FormInput.css';

function FormInput({label, state, setState, stateKey}) {
	return (
		<div>
			<label>
				{label} <input type='text' value={state[stateKey]} onChange={(e) => setState((prevState) => ({...prevState, [stateKey]: e.target.value}))} />
			</label>
		</div>
	);
}

export default FormInput;
