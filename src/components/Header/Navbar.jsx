import React from 'react';
import { NavLink } from 'react-router';
import './Navbar.css'

const Navbar = () => {
    const links = <>
        <NavLink className='hover:text-amber-900 text-amber-900' to="/">Home</NavLink>
        <NavLink className='hover:text-amber-900 text-amber-900' to="/findTutors">Available Foods</NavLink>
        <NavLink className='hover:text-amber-900 text-amber-900' to="/addTutorials">Add Food </NavLink>
        <NavLink className='hover:text-amber-900 text-amber-900' to="/myTutorials">Manage My Foods</NavLink>
        <NavLink className='hover:text-amber-900 text-amber-900' to="/myBookedTutors">My Food Request</NavLink>
    </>

    return (
        <div className="navbar w-full bg-red-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a href="">
                    <div className='flex items-center gap-2'>
                        <img className='max-w-[30px]' src='../../assets/react.svg' alt="" />
                        <h4 className='text-2xl font-semibold kaushan-script text-blue-900'>FeastForward</h4>
                    </div>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-md font-semibold flex gap-4 px-1 text-[#F1F8E9] items-center">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                {/* {<ThemeToggle></ThemeToggle>} */}
                <div className="dropdown dropdown-hover dropdown-left dropdown-center">
                    {/* {
                        user ? <div className="avatar max-w-8">
                            <div className="ring-primary bg-white ring-offset-base-100 w-12s rounded-full ring-2 ring-offset-2">
                                <img src={user.photoURL ? user.photoURL :
                                    "https://img.icons8.com/?size=48&id=84020&format=png"
                                } />
                            </div>

                        </div>

                            : <></>
                    }
                    {user?.displayName && (
                        <p tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            {user.displayName}
                        </p>
                    )} */}
                </div>
                {/* {
                    user ?
                        <Link to="/">
                            <button onClick={handleLogOut} className="btn bg-green-900 text-white">LogOut</button>
                        </Link>
                        : <Link to="/login">
                            <button className="btn bg-green-900 text-white">Login</button>
                        </Link>
                } */}
                <button className="btn bg-orange-600 text-white">Login</button>

            </div>

        </div>
    );
};

export default Navbar;