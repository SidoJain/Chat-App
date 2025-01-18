import Sidebar from "../../components/sidebar/Sidebar.jsx"
import MessageContainer from "../../components/messages/MessageContainer.jsx"

export const Home = () => {
    return (
        <div className="flex flex-col md:flex-row p-4 md:h-[550px] rounded-lg overflow-hidden bg-white-300 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border-2 border-gray-400">
            <Sidebar />
            <MessageContainer />
        </div>
    )
}