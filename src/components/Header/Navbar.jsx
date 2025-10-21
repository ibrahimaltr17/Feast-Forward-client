import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import './Navbar.css';
import { AuthContext } from '../../context/AuthContext';
import { showError, showWarning } from '../../utility/sweetAlert';
import logo from '../../assets/Logo.png';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogOut = () => {
        logOut()
            .then(() => showWarning('Logged Out Successfully', 'See you again soon!'))
            .catch((error) => showError(error));
    };

    // General routes except About
    const generalLinks = <>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/availableFood" className="nav-link">Available Foods</NavLink>
    </>;

    // Private-only links
    const privateOnlyLinks = <>
        <NavLink to="/addFood" className="nav-link">Add Food</NavLink>
        <NavLink to="/myFood" className="nav-link">Manage My Foods</NavLink>
        <NavLink to="/myRequestedFoods" className="nav-link">My Food Request</NavLink>
    </>;

    // About link always at the end
    const aboutLink = <NavLink to="/about" className="nav-link">About</NavLink>;

    // Combine links depending on login state
    const links = user ? (
        <>
            {generalLinks}
            {privateOnlyLinks}
            {aboutLink}
        </>
    ) : (
        <>
            {generalLinks}
            {aboutLink}
        </>
    );

    return (
        <div
            className={`navbar sticky top-0 z-50 w-full px-4 lg:px-6 transition-all duration-300
                ${scrolled
                    ? 'bg-navbar-light/70 dark:bg-navbar-dark/70 backdrop-blur-lg shadow-md'
                    : 'bg-navbar-light dark:bg-navbar-dark'
                }`}
        >
            {/* Navbar Start */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-50 mt-3 w-32 p-2 shadow bg-navbar-light dark:bg-navbar-dark"
                    >
                        {links}
                    </ul>
                </div>
                <a href="/">
                    <div className="flex items-center gap-2">
                        <img className="max-w-[120px]" src={logo} alt="Logo" />
                    </div>
                </a>
            </div>

            {/* Navbar Center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-md font-semibold flex gap-4 px-1 items-center">
                    {links}
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end flex gap-3 items-center">
                <ThemeToggle />

                {/* Avatar */}
                <div className="dropdown dropdown-hover dropdown-left dropdown-center">
                    {user && (
                        <div className="avatar max-w-8">
                            <div className="ring-primary bg-white ring-offset-base-100 w-12s rounded-full ring-2 ring-offset-2">
                                <img
                                    src={user.photoURL ? user.photoURL : "https://img.icons8.com/?size=48&id=84020&format=png"}
                                    alt="User Avatar"
                                />
                            </div>
                        </div>
                    )}
                    {user?.displayName && (
                        <p
                            tabIndex={0}
                            className="dropdown-content menu rounded-box z-50 w-52 p-2 shadow-sm bg-navbar-light dark:bg-navbar-dark"
                        >
                            {user.displayName}
                        </p>
                    )}
                </div>

                {/* Auth Button */}
                {user ? (
                    <Link to="/">
                        <button onClick={handleLogOut} className="btn btn-primary">
                            LogOut
                        </button>
                    </Link>
                ) : (
                    <Link to="/login">
                        <button className="btn btn-primary">
                            Login
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
