import { useSocketContext } from "../../context/SocketContext.jsx";
import useConversation from "../../zustand/useConversation.js";
import blankAvatar from '../../assets/blank_avatar.png';

const Conversation = ({ conversation, lastIdx }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;

    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);

    const setDefaultAvatar = (event) => {
        event.target.src = blankAvatar;
        event.onError = null;
    }

    return (
        <>
            <div className={`flex gap-2 hover:bg-slate-800 items-center rounded px-2 py-1 cursor-pointer ${isSelected ? 'bg-slate-800' : ''}`} onClick={() => setSelectedConversation(conversation)}>
                <div className={`avatar ${isOnline ? 'online' : ''}`}>
                    <div className="w-12 rounded-full ">
                        <img src={conversation.profilePic} alt='avatar' onError={setDefaultAvatar} />
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                        <p className="font-bold text-gray-300">{conversation.fullname}</p>
                    </div>
                </div>
            </div>

            {!lastIdx ? <div className="divider my-0 py-0 h-1"></div> : null}
        </>
    )
}

export default Conversation