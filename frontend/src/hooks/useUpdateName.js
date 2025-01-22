import { useState } from 'react';
import toast from 'react-hot-toast';

export const useUpdateName = () => {
    const [loading, setLoading] = useState(false);

    const updateName = async (id, fullname) => {
        setLoading(true);
        try {
            const res = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id, fullname })
            });
            const data = await res.json();
            if (data.message === 'Internal Server Error') {
                throw new Error(data.message);
            }

            localStorage.setItem('auth-user', JSON.stringify(data));
            toast.success('Name Updated Successfully!');
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { loading, updateName };
}