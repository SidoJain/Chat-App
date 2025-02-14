import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const signup = async ({ fullname, username, password, confirmPassword, gender }) => {
		const correctInput = handleInput({ fullname, username, password, confirmPassword, gender });
		if (!correctInput) return;

		setLoading(true);
		try {
			const res = await fetch('/api/auth/signup', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ fullname, username, password, confirmPassword, gender }),
			});

			const data = await res.json();
			if (data.message == 'User already exists!') {
				throw new Error(data.message);
			}

			localStorage.setItem('auth-user', JSON.stringify(data));
			setAuthUser(data);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};
	return { loading, signup };
};

export default useSignup;

const handleInput = ({ fullname, username, password, confirmPassword, gender }) => {
	if (!fullname || !username || !password || !confirmPassword || !gender) {
		toast.error('Please fill all fields');
		return false;
	}
	if (password !== confirmPassword) {
		toast.error('Passwords do not match');
		return false;
	}
	if (password.length < 8) {
		toast.error('Password must be at least 8 characters');
		return false;
	}
	return true;
};
