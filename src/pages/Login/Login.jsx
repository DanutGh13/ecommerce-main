import React from 'react';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import { signInWithGoogle, signInWithFacebook } from '../../firebase-init';
import Layout from '../../components/Layout/Layout';

function Login() {
	return (
		<Layout>
			<div className="container mt-4 mb-4">
				<h1>Login with Google or Facebook</h1>
				<FacebookLoginButton className="mb-4" onClick={signInWithFacebook} />

				<GoogleLoginButton onClick={signInWithGoogle} />
			</div>
		</Layout>
	);
}

export default Login;
