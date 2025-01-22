import LogoutBtn from "./LogoutBtn"

const Navbar = () => {
    const username = JSON.parse(localStorage.getItem('auth-user'))?.user.username;

    return (
        <div className="h-[10%]">
            <div className="bg-slate-900 text-white p-4 flex justify-between items-center">
                <a href="/" className="text-4xl font-bold text-center text-blue-700 cursor-pointer">QuickChat</a>
                <div className="flex items-center">
                    <a href="/profile" className="underline mr-4">{username}</a>
                    {username ? <LogoutBtn /> : null}
                </div>
            </div>
        </div>
    )
}

export default Navbar