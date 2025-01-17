import SearchInput from "./SearchInput.jsx"
import Conversations from "./Conversations.jsx"
import LogoutBtn from "./LogoutBtn.jsx"

const Sidebar = () => {
    return (
        <div className="border-r border-slate-400 p-4 flex flex-col">
            <SearchInput />
            <div className="divider px-3"></div>
            <Conversations />
            <LogoutBtn />
        </div>
    )
}

export default Sidebar