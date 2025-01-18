import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const login = async (username, password) => {
        username = username.toLowerCase();
        const correctInput = handleInput({ username, password });
		if (!correctInput) return;

		setLoading(true);
		try {
			const res = await fetch('/api/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ username, password }),
			});
			const data = await res.json();
			if (data.message === 'Invalid Username or Password!') {
				throw new Error(data.error = data.message);
			}

			localStorage.setItem('auth-user', JSON.stringify(data));
            setAuthUser(data);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};
    return { loading, login };
};

export default useLogin;

const handleInput = ({ username, password }) => {
	if (!username || !password) {
		toast.error('Please fill all fields');
		return false;
	}
	return true;
};