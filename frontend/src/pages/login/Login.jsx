import { useState } from "react"
import { Link } from "react-router-dom"
import useLogin from "../../hooks/useLogin"

export const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { loading, login } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(username, password)
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="w-full p-6 h-full bg-white-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border-2 border-gray-400">
                <h1 className="text-4xl font-bold text-center text-blue-700">QuickChat</h1>
                <h1 className="text-3xl font-semibold text-center text-gray-300">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2" htmlFor="username">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text" className="input input-bordered w-full" placeholder="Enter Username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label className="label p-2" htmlFor="password">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" className="input input-bordered w-full" placeholder="Enter Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <Link to='/signup' className="text-sm hover:text-white mt-2 inline-block duration-150">{"Don't"} have an Account?</Link>
                    <button className="btn btn-block btn-sm mt-2" disabled={loading}>{loading ? <span className="loading loading-spinner"></span> : 'Login' }</button>
                </form>
            </div>
        </div>
    )
}