import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

export const useDeleteAccount = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const deleteAccount = async (id) => {
        setLoading(true);
        try {
            const res = await fetch('/api/users/delete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id })
            });
            const data = await res.json();
            if (data.message === 'Internal Server Error') {
                throw new Error(data.message);
            }

            localStorage.removeItem('auth-user');
            setAuthUser(null);
            toast.success('Account Deleted Successfully!');
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { loading, deleteAccount };
}