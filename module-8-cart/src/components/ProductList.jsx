import React, {useEffect, useState} from 'react';
import Product from "./Product.jsx";
import fetchProducts from "../utils/fetchProducts.js";
import Loader from "./Loader.jsx";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetchProducts()
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                setError("There was an error");
                setLoading(false);
            });
    }, []);

    // decide what to render
    let output;

    if (loading) {
        output = <Loader/>;
    } else if (error) {
        output = <div>There was an error</div>;
    } else {
        if (products?.length > 0) {
            output = products.map((product) => (
                <Product key={product.id} product={product}/>
            ));
        } else {
            output = <div>No products found!</div>;
        }
    }
    return (
        <div className="container z-10 mx-auto my-12 p-9">
            {
                loading ? output :
                    <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {output}
                    </div>
            }

        </div>
    );
};

export default ProductList;
