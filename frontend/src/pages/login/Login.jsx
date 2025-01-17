export const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="w-full p-6 h-full bg-white-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border-2 border-gray-400">
                <h1 className="text-3xl font-semibold text-center text-gray-300">Login <span className="text-blue-700">QuickChat</span></h1>
                <form action="">
                    <div>
                        <label className="label p-2" htmlFor="username">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text" className="input input-bordered w-full" placeholder="Enter Username" id="username" />
                    </div>
                    <div>
                        <label className="label p-2" htmlFor="password">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" className="input input-bordered w-full" placeholder="Enter Password" id="password" />
                    </div>
                    <a href="#" className="text-sm hover:text-white mt-2 inline-block duration-150">{"Don't"} have an Account?</a>
                    <button className="btn btn-block btn-sm mt-2">Login</button>
                </form>
            </div>
        </div>
    )
}