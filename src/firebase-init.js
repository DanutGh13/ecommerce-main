import { initializeApp } from 'firebase/app';
import firebaseConfig from './configs/firebase';
import { getAuth, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
	signInWithPopup(auth, provider)
		.then((result) => {
			const name = result.user.displayName;
			const email = result.user.email;
			const profilePic = result.user.photoURL;

			localStorage.setItem('name', name);
			localStorage.setItem('email', email);
			localStorage.setItem('profilePic', profilePic);
			window.location.href = '/';
		})
		.catch((error) => {
			console.log(error);
		});
};

const providerFB = new FacebookAuthProvider();
export const signInWithFacebook = () => {
	signInWithPopup(auth, providerFB)
		.then((result) => {
			const name = result.user.displayName;
			const email = result.user.email;
			const profilePic = result.user.photoURL;

			localStorage.setItem('name', name);
			localStorage.setItem('email', email);
			localStorage.setItem('profilePic', profilePic);
			window.location.href = '/';
		})
		.catch((error) => {
			console.log(error);
		});
};
export const signOut = function() {
	localStorage.clear();
	window.location.href = '/';
};
