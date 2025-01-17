import GenderBox from "./GenderBox.jsx";

export const Signup = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="w-full p-6 h-full bg-white-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border-2 border-gray-400">
                <h1 className="text-3xl font-semibold text-center text-gray-300">Signup <span className="text-blue-700">QuickChat</span></h1>
                <form action="">
                    <div>
                        <label className="label p-2" htmlFor="fullname">
                            <span className="text-base label-text">Full Name</span>
                        </label>
                        <input type="text" className="input input-bordered w-full" placeholder="John Doe" id="fullname" />
                    </div>
                    <div>
                        <label className="label p-2" htmlFor="username">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text" className="input input-bordered w-full" placeholder="Enter Username" id="johndoe" />
                    </div>
                    <div>
                        <label className="label p-2" htmlFor="password">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" className="input input-bordered w-full" placeholder="Enter Password" id="password" />
                    </div>
                    <div>
                        <label className="label p-2" htmlFor="confirmPwd">
                            <span className="text-base label-text">Confirm Password</span>
                        </label>
                        <input type="password" className="input input-bordered w-full" placeholder="Confirm Password" id="confirmPwd" />
                    </div>
                    <GenderBox />
                    <a href="#" className="text-sm hover:text-white mt-2 inline-block duration-150">Already have an Account?</a>
                    <button className="btn btn-block btn-sm mt-2">Signup</button>
                </form>
            </div>
        </div>
    )
}