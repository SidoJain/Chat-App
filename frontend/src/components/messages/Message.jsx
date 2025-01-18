import { useAuthContext } from '../../context/AuthContext';

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const isSender = message.senderId === authUser.user._id;
    const chatName = isSender ? 'chat-end' : 'chat-start';
    const chatColor = isSender ? 'bg-blue-700' : 'bg-gray-700';

    return (
        <div className={`chat ${chatName}`}>
            <div className={`chat-bubble break-words text-white ${chatColor}`}>{message.message}</div>
            <div className="chat-footer opacity-80 text-xs flex gap-1 items-center">{getTime(message.createdAt)}</div>
        </div>
    )
}

const getTime = (dateTime) => {
    const newDate = new Date(dateTime);
    const hours = newDate.getHours();
    const mins = newDate.getMinutes();
    const date = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    return `${hours}:${mins} ${date}/${month}/${year}`;
}

export default Message