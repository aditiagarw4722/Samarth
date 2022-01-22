import React from 'react';
import './ProfileDropdown.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const ProfileDropdown = ({ isOpens, toggles }) => {
    let navigate =useNavigate();
    function navigation(){
        navigate('/');
    }
    const logout = () =>{
        sessionStorage.removeItem("token");
        navigation();
    }
    const mystyle = {
        position: "absolute",
        display: "block",
        marginLeft: "1250px",
    };
    return (
        <div className={isOpens ? 'bg-gray-100' : 'hidden'} onClick={toggles}>
            <ul className="dropdown-menu show border-gray-100 border-4" aria-labelledby="navbarDropdown" data-bs-popper="none" style={mystyle}>
                <Link to='/EditProfile'>
                    <li className='text-xl font-semibold p-3'>Edit Profile</li>
                </Link>
                <li className='text-xl font-semibold p-3 cursor-pointer' onClick={logout}>Logout</li>
            </ul>
        </div>
    )
}
