import React from 'react';
import axios from 'axios';
import './SignupLogin.css';
import firstpic from "../../assets/LoginSignup.svg";
import swal from 'sweetalert';

export const SignupLogin = () => {

    const name = React.createRef();
    const email = React.createRef();
    const password = React.createRef();
    const username = React.createRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name.current.value);
        console.log(email.current.value);
        console.log(password.current.value);
        console.log(username.current.value);

        axios.post("https://hackjobportal.herokuapp.com/signup", {
            name: name.current.value,
            email: email.current.value,
            username: username.current.value,
            password: password.current.value
        }).then((response) => {
            console.log(response);
            console.log(response.status);
            if (response.status == 201) {
                swal("SUCCESS!", "User has been created successfully!", "success");
            }
        }).catch((err) => {
            console.log(err);
            console.log(err.response.status);
            if (err.response.status == 400) {
                swal("ERROR!", "Username/Email is already used!", "error");
            }
        })
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-content-center'>
            <div className='lg:order-last image'>
                <img src={firstpic} alt='pic' className='lg:w-10/12 lg:h-5/6 mt-7 ml-4' />
            </div>
            <div className="w-11/12 h-11/12 shadow-default lg:mt-10 lg:ml-10 py-10 px-1">
                <blockquote className="text-2xl font-medium text-center">
                    <p className="text-xl font-semibold">Welcome to Hostel Managment Web!!</p>
                </blockquote>

                <div className="text-primary m-6">
                    <div className="flex items-center mt-3 justify-center">
                        <h1 className="text-2xl font-medium text-primary mt-4 mb-2">
                            Signup to your account.
                        </h1>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <label className="text-left">Name:</label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Name"
                            ref={name}
                            className={
                                "w-full p-2 text-primary border-4 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                            }
                        />
                        <label className="text-left">Email:</label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Email-ID"
                            ref={email}
                            className={
                                "w-full p-2 text-primary border-4 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                            }
                        />
                        <label className="text-left">Username:</label>
                        <input
                            name="username"
                            type="text"
                            placeholder="Username"
                            ref={username}
                            className={
                                "w-full p-2 text-primary border-4 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                            }
                        />
                        <label>Password:</label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            ref={password}
                            className={
                                "w-full p-2 text-primary border-4 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                            }
                        />
                        <div className="flex items-center mt-3 justify-center">
                            <button type='submit'
                                className={
                                    "bg-blue-700 hover:bg-blue-500 py-2 px-10 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
                                }
                                value="Login"
                            >
                                SIGNUP
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}