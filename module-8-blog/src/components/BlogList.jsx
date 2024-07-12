import React from 'react';
import {Link} from "react-router-dom";

const BlogList = (props) => {
    return (
        <div>
            <div className="container mx-auto my-16 p-9">
                <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        props.lists.map((list, index) => {
                            return (
                                <Link key={index.toString()} to={'/'} className="card w-100 glass">
                                    <figure><img src={list.img} alt="nai"/></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{list.title}</h2>
                                        <p>{list.short}</p>
                                    </div>

                                </Link>
                            )
                        })
                    }


                </div>
            </div>
        </div>
    );
};

export default BlogList;
