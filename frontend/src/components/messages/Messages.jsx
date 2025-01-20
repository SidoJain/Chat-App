import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages.js"
import Message from "./Message.jsx"
import useListenMessages from "../../hooks/useListenMessages.js"

const Messages = () => {
    const { messages, loading } = useGetMessages();
    useListenMessages();
    const lastMessageRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100)
    }, [messages])

    return (
        <div className={`px-4 flex-1 overflow-auto ${loading ? 'flex justify-center items-center' : ''}`}>
            {loading ? <span className="loading loading-spinner"></span> : null}
            {!loading && messages.length > 0 && messages.map((message) => (
                <div key={message._id} ref={lastMessageRef}>
                    <Message message={message} />
                </div>
        ))}
            {!loading && messages.length === 0 && <p className="text-center">No messages yet...</p>}
        </div>
    )
}

export default Messages