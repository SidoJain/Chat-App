import Conversation from "./Conversation.jsx"
import useGetConversations from "../../hooks/useGetConversations.js"

const Conversations = () => {
    const { loading, conversations } = useGetConversations();

    return (
        <div className={`py-2 flex flex-col overflow-auto mb-2 ${loading ? 'items-center' : ''}`}>
            {conversations.map((conversation, idx) => (
                <Conversation key={conversation._id} conversation={conversation} lastIdx={idx === conversations.length - 1} />
            ))}
            {loading ? <span className="loading loading-spinner"></span> : null}
        </div>
    )
}

export default Conversations