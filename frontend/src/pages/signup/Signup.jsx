import { Link } from "react-router-dom";
import { useState } from "react";
import GenderBox from "./GenderBox.jsx";
import useSignup from "../../hooks/useSignup";

export const Signup = () => {
    const [inputs, setInputs] = useState({
        fullname: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });

    const { loading, signup } = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="w-full p-6 h-full bg-white-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border-2 border-gray-400">
                <h1 className="text-4xl font-bold text-center text-blue-700">QuickChat</h1>
                <h1 className="text-3xl font-semibold text-center text-gray-300">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2" htmlFor="fullname">
                            <span className="text-base label-text">Full Name</span>
                        </label>
                        <input type="text" className="input input-bordered w-full" placeholder="John Doe" id="fullname" value={inputs.fullname} onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })} />
                    </div>
                    <div>
                        <label className="label p-2" htmlFor="username">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text" className="input input-bordered w-full" placeholder="Enter Username" id="username" value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
                    </div>
                    <div>
                        <label className="label p-2" htmlFor="password">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" className="input input-bordered w-full" placeholder="Enter Password" id="password" value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
                    </div>
                    <div>
                        <label className="label p-2" htmlFor="confirmPassword">
                            <span className="text-base label-text">Confirm Password</span>
                        </label>
                        <input type="password" className="input input-bordered w-full" placeholder="Confirm Password" id="confirmPassword" value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
                    </div>
                    <GenderBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
                    <Link to='/login' className="text-sm hover:text-white mt-2 inline-block duration-150">Already have an Account?</Link>
                    <button className="btn btn-block btn-sm mt-2" disabled={loading}>{loading ? <span className="loading loading-spinner"></span> : "Signup"}</button>
                </form>
            </div>
        </div>
    )
}