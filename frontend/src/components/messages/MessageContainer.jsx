import { TiMessages } from 'react-icons/ti'
import { useEffect } from 'react'
import Messages from './Messages.jsx'
import MessageInput from './MessageInput.jsx'
import { useAuthContext } from '../../context/AuthContext.jsx'
import useConversation from '../../zustand/useConversation.js'

const MessageContainer = () => {
    const {selectedConversation, setSelectedConversation} = useConversation();

    useEffect(() => {
        return () => setSelectedConversation(null)
    }, [setSelectedConversation]);

    return (
        <div className='h-[300px] md:h-[100%] md:min-w-[450px] flex flex-col '>
            {!selectedConversation ? <NoChatSelected /> : (
                <>
                    <div className="bg-slate-400 px-4 py-2 mb-2">
                        <span className="text-gray-700 font-bold">{selectedConversation.fullname}</span>
                    </div>
                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    )
}

export default MessageContainer

const NoChatSelected = () => {
    const { authUser } = useAuthContext();
    return (
        <div className="flex justify-center h-[300px] items-center w-full md:h-full">
            <div className="px-4 text-center text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>Welcome {authUser.user.fullname}</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center'/>
            </div>
        </div>
    )
}