import React, {useEffect, useState} from 'react';
import {postCategory} from "../apiRequest/ApiRequest.js";
import {NavLink} from "react-router-dom";

const Layout = (props) => {
    const [categories,setCategories] = useState([]);
    useEffect(() => {
        (async () => {
            let res = await postCategory();
            setCategories(res);
        })()
    }, []);

    return (
        <div>
            <div className="navbar fixed top-0 z-50 shadow bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                            {
                                categories.map((category,index)=>{
                                    return <li key={index.toString()}><NavLink to={`/by-category/${category['id']}`}>{category['name']}</NavLink></li>
                                })
                            }

                        </ul>
                    </div>
                    <NavLink to="/" className="btn btn-ghost text-xl">daisyUI</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            categories.map((category,index)=>{
                                return <li key={index.toString( )}><NavLink to={`/by-category/${category['id']}`}>{category['name']}</NavLink></li>
                            })
                        }
                    </ul>
                </div>
            </div>
            {props.children}
        </div>
    );
};

export default Layout;
