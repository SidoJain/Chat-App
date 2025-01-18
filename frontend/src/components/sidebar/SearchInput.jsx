import { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import useConversation from '../../zustand/useConversation.js';
import useGetConversations from '../../hooks/useGetConversations.js';
import toast from 'react-hot-toast';

const SearchInput = () => {
    const [search, setSearch] = useState('');
    const {setSelectedConversation} = useConversation();
    const {conversations} = useGetConversations();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        if (search.length < 3) {
            toast.error('Search query was too short');
            return;
        }
        
        const conversation = conversations.find((c) => c.fullname.toLowerCase().includes(search.toLowerCase()));
        if (conversation) {
            setSelectedConversation(conversation);
            setSearch('');
        } else {
            toast.error('No conversation found');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input type="text" className="input input-bordered rounded-full" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <button type='submit' className="btn btn-circle text-white"><IoIosSearch /></button>
        </form>
    )
}

export default SearchInput