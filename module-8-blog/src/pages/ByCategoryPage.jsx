import React, {useEffect, useState} from 'react';
import Layout from "../layout/Layout.jsx";
import {useParams} from "react-router-dom";
import {postByCategory} from "../apiRequest/ApiRequest.js";
import Loader from "../components/Loader.jsx";
import BlogList from "../components/BlogList.jsx";

const ByCategory = () => {
    let {categoryId} = useParams();

    let [lists,setLists] = useState(null);
    useEffect(() => {
        (async () => {
            let res = await postByCategory(categoryId);
            setLists(res);
        })()
    }, [categoryId]);

    return (
        <Layout>
            { lists === null ? <Loader/> : <BlogList lists={lists}/> }
        </Layout>
    );
};

export default ByCategory;
