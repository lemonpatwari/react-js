import React from 'react';
import {NavLink} from "react-router-dom";

const Layout = (props) => {
    return (
        <div>
            <div className="navbar fixed top-0 bg-white z-50 px-20 drop-shadow-lg bg-base-100">
                <div className="flex-1">
                    <img className="w-20" src="/images/logo.png"/>
                </div>
                <div className="flex-none">

                    <ul className="menu menu-horizontal px-2">
                        <li><NavLink to="/">Product</NavLink></li>
                    </ul>
                    <ul className="menu menu-horizontal px-3">
                        <li><NavLink to="/cart-list">View Cart</NavLink></li>
                    </ul>


                    <div className="dropdown dropdown-end px-2">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/user.webp"/>
                            </div>
                        </label>
                        <ul tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a onClick={() => {
                            }}>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {props.children}
        </div>
    );
};

export default Layout;
