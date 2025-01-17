import { TiMessages } from 'react-icons/ti'
import Messages from './Messages.jsx'
import MessageInput from './MessageInput.jsx'

const MessageContainer = () => {
    const noChatSelected = false;

    return (
        <div className='md:min-w-[450px] flex flex-col '>
            {noChatSelected ? <NoChatSelected /> : (
                <>
                    <div className="bg-slate-400 px-4 py-2 mb-2">
                        <span className="text-gray-600 font-semibold">To:</span> <span className="text-gray-700 font-bold">John Snow</span>
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
    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>Welcome John Snow</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center'/>
            </div>
        </div>
    )
}