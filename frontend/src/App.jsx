import { Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Login } from './pages/login/Login'
import { Signup } from './pages/signup/Signup'
import { Home } from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import { useAuthContext } from './context/AuthContext.jsx'

function App() {
    const { authUser } = useAuthContext();

    return (
        <div className='h-screen w-screen'>
            <Navbar />
            <div className='p-4 h-[90%] flex items-center justify-center'>
                <Routes>
                    <Route path='/' element={authUser ? <Home /> : <Navigate to='/login' />} />
                    <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
                    <Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup />} />
                </Routes>
                <Toaster />
            </div>
        </div>
    )
}

export default App
