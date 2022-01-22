import React from 'react';
import axios from 'axios';
import './LoginSignup.css';
import firstpic from "../../assets/LoginSignup.svg";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

export const LoginSignup = () => {

    const password = React.createRef();
    const username = React.createRef();
    let navigate = useNavigate();
    function navigation() {
        navigate('/dashboard');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(password.current.value);
        console.log(username.current.value);

        axios.post("https://hackjobportal.herokuapp.com/login", {
            username: username.current.value,
            password: password.current.value
        }).then((response) => {
            console.log(response);
            console.log(response.data.token);
            sessionStorage.setItem("token", response.data.token);
            console.log(response.status);
            if (response.status == 200) {
                navigation();
            }
        }).catch((err) => {
            console.log(err);
            console.log(err.response.status);
            if (err.response.status == 400) {
                swal("ERROR!", "Use valid Username/Password!", "error");
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
                            Login to your account.
                        </h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label className="text-left">Username:</label>
                        <input
                            name="username"
                            type="text"
                            ref={username}
                            placeholder="Username"
                            className={
                                "w-full p-2 text-primary border-4 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                            }
                        />
                        <label>Password:</label>
                        <input
                            name="password"
                            type="password"
                            ref={password}
                            placeholder="Password"
                            className={
                                "w-full p-2 text-primary border-4 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                            }
                        />
                        <div className="flex items-center mt-3 justify-center">
                            <button
                                type='submit'
                                className={
                                    "bg-blue-700 hover:bg-blue-500 py-2 px-10 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
                                }
                                value="Login"
                            >
                                LOGIN
                            </button>
                        </div>
                    </form>
                    <div className="flex items-center mt-3 justify-center">
                        <Link to="/signuplogin">
                            <button className={"justify-center text-blue-500 hover:underline"}>
                                Need to register? Sign up for free
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}