import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutBtn = () => {
    const {logout} = useLogout();

    return (
        <div className='mt-auto'><BiLogOut className="w-6 h-6 text-white cursor-pointer" onClick={logout} /></div>
    )
}

export default LogoutBtn