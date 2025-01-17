import Sidebar from "../../components/sidebar/Sidebar.jsx"
import MessageContainer from "../../components/messages/MessageContainer.jsx"

export const Home = () => {
    return (
        <div className="flex p-4 sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-white-300 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border-2 border-gray-400">
            <Sidebar />
            <MessageContainer />
        </div>
    )
}