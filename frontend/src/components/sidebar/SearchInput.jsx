import { IoIosSearch } from "react-icons/io";

const SearchInput = () => {
    return (
        <form action="" className="flex items-center gap-2">
            <input type="text" className="input input-bordered rounded-full" placeholder="Search..." />
            <button type='submit' className="btn btn-circle text-white"><IoIosSearch /></button>
        </form>
    )
}

export default SearchInput