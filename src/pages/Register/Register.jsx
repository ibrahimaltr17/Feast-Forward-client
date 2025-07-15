import React, { useContext } from 'react';
import { FaEye } from "react-icons/fa";
import google from '../../assets/google.png';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';
import { Link, Navigate, useNavigate } from 'react-router';
import { updateProfile } from 'firebase/auth';
import { showError, showSuccess } from '../../utility/sweetAlert';

const Register = () => {

    const { createUser, googleLogIn } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const email = formData.get('email') || '';
        const password = formData.get('password') || '';
        const name = formData.get('name') || '';
        const photo = formData.get('photo') || '';

        createUser(email, password)
            .then(result => {
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                }).then(() => {
                    const userProfile = {
                        email,
                        name,
                        photo,
                        creationTime: result.user?.metadata?.creationTime,
                        lastSignInTime: result.user?.metadata?.lastSignInTime
                    };

                    fetch('https://server-leaf-log.vercel.app/users', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(userProfile)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId || data.acknowledged) {
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Your account is created.",
                                    showConfirmButton: false,
                                    timer: 800
                                });
                                form.reset();
                                navigate('/')
                            }
                        });
                });
            })
            .catch((error) => {
                console.error('Error creating user:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Registration failed',
                    text: error.message,
                });
            });
    };

    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(result => {
                const user = result.user;
                showSuccess('Login Successful!', 'Welcome back!')
                navigate(location.state?.path || "/");
            })
            .catch(error => {
                console.error("Google sign-in error:", error.message);
                showError('Login Failed', error.message)
            });
    }

    return (
        <div className='bg-green-900 h-screen lg:flex relative'>
            <Link to="/"><button className='btn btn-circle absolute right-4 top-4'>X</button></Link>
            <div className='w-5/12 hidden lg:block h-screen px-5 text-white text-center'>
                <div className='lg:flex h-full flex-col items-center justify-center'>
                    <h1 className='text-5xl font-bold text-center my-auto'>Join us today! It only takes a few seconds.</h1>
                </div>
            </div>
            <div className='text-white lg:text-black lg:bg-white rounded-l-2xl h-screen w-full lg:w-7/12 flex justify-center items-center '>
                <div className='min-w-[320px]'>
                    <h3 className='text-2xl font-bold lg:text-3xl text-center my-3'>Register Now</h3>
                    <form onSubmit={handleSignUp}>
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input text-black" placeholder="Name" required /><br />

                        <label className="label">Email</label>
                        <input type="email" name='email' className="input text-black" placeholder="Email" required /><br />

                        <label className="label">Photo URL</label>
                        <input type="text" name='photo' className="input text-black" placeholder="Photo URL" /><br />

                        <label className="label">Password</label>
                        <div className='relative text-black'>
                            <input
                                type='password'
                                name='password'
                                className="input w-full text-black"
                                placeholder="Password"
                                minLength="6"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                                title="Must be more than 6 characters, including number, lowercase and uppercase letter"
                                required
                            />
                            <button
                                className='absolute top-3 right-2 cursor-pointer'
                                aria-label="Toggle Password Visibility"
                                type="button"
                            >
                                <FaEye />
                            </button>
                        </div>

                        <button type='submit' className="btn btn-neutral mt-4 w-full">Register</button>
                    </form>

                    <p className='mt-3'>
                        Already have an account? <Link to="/login" className='text-blue-500'>Login</Link>
                    </p>

                    <div className="divider text-white lg:text-black">OR</div>

                    <div className='flex justify-center rounded-md gap-1.5 cursor-pointer p-1 bg-gray-100' onClick={handleGoogleLogIn}>
                        <img src={google} alt="Google logo" className='w-5' />
                        <p className='text-black'>Sign in with Google</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;