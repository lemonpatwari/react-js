import React, {useEffect, useState} from 'react';
import Layout from "../layout/Layout.jsx";
import BlogList from "../components/BlogList.jsx";
import {postLatest} from "../apiRequest/ApiRequest.js";
import Loader from "../components/Loader.jsx";

const HomePage = () => {
    const [lists,setLists] = useState(null);
    useEffect(() => {
        (async () => {
            let res = await postLatest();
            setLists(res);
        })()
    }, []);
    return (
        <Layout>
            { lists === null ? <Loader/> : <BlogList lists={lists}/> }
        </Layout>
    );
};

export default HomePage;
