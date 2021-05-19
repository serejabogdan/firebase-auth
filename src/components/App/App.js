import React from 'react';
import './App.css';

import FormInput from '../../shared/FormInput';

function App() {
	return (
		<div className='App'>
			<h1>Registration</h1>
			<form className='App__registration-form'>
				<FormInput label='Login:' />
				<FormInput label='Password:' />
				<FormInput label='Confirm password:' />
				<button type='submit'>Go!</button>
			</form>
			<h1>Login</h1>
			<form className='App__registration-form'>
				<FormInput label='Login:' />
				<FormInput label='Password:' />
				<button type='submit'>Get in</button>
			</form>
		</div>
	);
}

export default App;
