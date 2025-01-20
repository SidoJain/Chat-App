import SearchInput from "./SearchInput.jsx"
import Conversations from "./Conversations.jsx"

const Sidebar = () => {
    return (
        <div className="md:border-r md:mb-0 md:border-b-0 md:max-h-[100%] border-b mb-4 max-h-[300px] border-slate-400 p-4 flex flex-col">
            <SearchInput />
            <div className="divider px-3"></div>
            <Conversations />
        </div>
    )
}

export default Sidebar