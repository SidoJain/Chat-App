import { useState } from 'react';
import { toast } from 'react-hot-toast';
import blankAvatar from '../../assets/blank_avatar.png';
import { useUpdateName } from '../../hooks/useUpdateName.js';
import { useDeleteAccount } from '../../hooks/useDeleteAccount.js';

export const Profile = () => {
    const user = JSON.parse(localStorage.getItem('auth-user')).user;
    const id = user._id;
    const [fullname, setFullname] = useState(user.fullname);
    const { loading, updateName } = useUpdateName();
    const {loading: loadingDel, deleteAccount} = useDeleteAccount();

    const confirmDelete = () => {
        toast(
            (t) => (
                <div>
                    <p>Are you sure you want to delete your account?</p>
                    <div className='flex justify-between mt-4'>
                        <button className='btn btn-error'
                            onClick={() => {
                                toast.dismiss(t.id);
                                handleDelete();
                            }}>Yes, delete it</button>
                        <button className='btn btn-primary' onClick={() => toast.dismiss(t.id)}>Cancel</button>
                    </div>
                </div>
            ),
            { duration: 5000 }
        );
    };

    const setDefaultAvatar = (event) => {
        event.target.src = blankAvatar;
        event.onError = null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateName(id, fullname);
    };

    const handleDelete = async () => {
        await deleteAccount(id);
    };

    return (
        <div className="flex gap-4 flex-col min-w-[300px] p-4 h-[550px] rounded-lg overflow-hidden bg-white-300 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border-2 border-gray-400 items-center">
            <h1 className="text-3xl font-semibold text-center text-gray-300">Profile</h1>
            <div className='w-24 h-24 rounded-full border-solid border-gray-400 border-2'>
                <img src={`${user.profilePic}`} alt="avatar" onError={setDefaultAvatar} />
            </div>
            <div>
                <h2 className="text-xl font-semibold text-center text-gray-300">{user.username}</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="label p-2" htmlFor="fullname">
                        <span className="text-base label-text">Edit Full Name</span>
                    </label>
                    <input type="text" className="input input-bordered w-full" placeholder="Enter Full Name" id="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} />
                </div>
                <button type='submit' className="btn btn-block btn-sm mt-2" disabled={loading || fullname === user.fullname || fullname === ''}>{loading ? <span className="loading loading-spinner"></span> : 'Update'}</button>
            </form>

            <button onClick={confirmDelete} disabled={loadingDel} className='mt-auto btn btn-block btn-error btn-sm'>Delete Account?</button>
        </div>
    )
}