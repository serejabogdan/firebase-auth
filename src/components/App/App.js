import React, {useEffect, useState} from 'react';
import './App.css';

import FormInput from '../../shared/FormInput';

import {hasAuthStateChanged, signup, signin, signOut} from '../../utils/auth';

function App() {
	const [authState, setAuthState] = useState(null);
	const [signupState, setSignupState] = useState({login: 'admin@gmail.com', password: 'adminadmin', confirmPassword: ''});
	const [signinState, setSigninState] = useState({login: 'admin@gmail.com', password: 'adminadmin'});

	useEffect(() => {
		const unsubscribe = hasAuthStateChanged(setAuthState);
		console.log(authState);
		return unsubscribe;
	}, [authState]);

	const handleSignupSubmit = async (e) => {
		e.preventDefault();
		try {
			await signup(signupState.login, signupState.password);
		} catch {
			console.error('Cant signup');
		}
	};
	const handleSigninSubmit = (e) => {
		e.preventDefault();
		signin(signinState.login, signinState.password);
	};
	return (
		<div className='App'>
			{!authState ? (
				<>
					<h1>Registration</h1>
					<form className='App__registration-form' onSubmit={handleSignupSubmit}>
						<FormInput label='Login:' stateKey='login' state={signupState} setState={setSignupState} />
						<FormInput label='Password:' stateKey='password' state={signupState} setState={setSignupState} />
						<FormInput label='Confirm password:' stateKey='confirmPassword' state={signupState} setState={setSignupState} />
						<button type='submit'>Go!</button>
					</form>
					<h1>Login</h1>
					<form className='App__registration-form' onSubmit={handleSigninSubmit}>
						<FormInput label='Login:' stateKey='login' state={signinState} setState={setSigninState} />
						<FormInput label='Password:' stateKey='password' state={signinState} setState={setSigninState} />
						<button type='submit'>Get in</button>
					</form>
				</>
			) : (
				<button onClick={signOut}>LogOut</button>
			)}
		</div>
	);
}

export default App;
