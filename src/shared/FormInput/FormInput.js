import React from 'react';
import './FormInput.css';

function FormInput({label}) {
	return (
		<div>
			<label>
				{label} <input type='text' />
			</label>
		</div>
	);
}

export default FormInput;
