import React from 'react';
import './App.css';

function App() {
	return (
		<div className='App'>
			<h1>Registration</h1>
			<form className='App__registration-form'>
				<label>
					Login: <input type='text' />
				</label>
				<label>
					Password: <input type='text' />
				</label>
				<label>
					Confirm password: <input type='text' />
				</label>
				<button type='submit'>Go!</button>
			</form>
			<h1>Login</h1>
			<form className='App__registration-form'>
				<label>
					Login: <input type='text' />
				</label>
				<label>
					Password: <input type='text' />
				</label>
				<button type='submit'>Get in</button>
			</form>
		</div>
	);
}

export default App;
