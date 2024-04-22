import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch
import MoreProducts from './MoreProducts';
import { MockProducts } from '../constant/AllData';
import { BodyWear } from "../constant/BodyWear"
import { LegWear } from "../constant/LegWear"
import { Shorts } from "../constant/Shorts"
import { SportsBra } from "../constant/SportsBra"
import { getProducts } from '../lib/FetchRecord';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [displayCount, setDisplayCount] = useState(6);
    const [isLoading, setIsLoading] = useState(false);
    const selectedCategoryId = useSelector(state => state?.ShowData);
    const CartData = useSelector((state) => state);
    console.log(CartData, "CartData");

    const dispatch = useDispatch();

    useEffect(() => {
        let newProducts = [];
        if (selectedCategoryId === 0) {
            newProducts = MockProducts;
        }
        if (selectedCategoryId === 1) {
            newProducts = BodyWear;
        }
        if (selectedCategoryId === 2) {
            newProducts = LegWear;
        }
        if (selectedCategoryId === 3) {
            newProducts = Shorts;
        }
        if (selectedCategoryId === 4) {
            newProducts = SportsBra;
        }
        if (selectedCategoryId === 5) {
            newProducts = SportsBra;
        }
        setProducts(newProducts);
    }, [selectedCategoryId]);

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            setIsLoading(true);
            setTimeout(() => {
                setDisplayCount(prevCount => prevCount + 6);
                setIsLoading(false);
            }, 2000);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getProducts();
                console.log(productsData, "data");
            } catch (error) {
                console.log(error);
            }
        };
        fetchProducts();
    }, []);

    const handleClick = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product }); // Use dispatch here
    };

    return (
        <div>
            <div className="container mx-auto py-8 z[-9999] mt-10">
                <MoreProducts />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.slice(0, displayCount).map(product => (
                        <div onClick={() => handleClick(product)} key={product.id} className="m-8 w-80 rounded-xl">
                            <picture className="rounded-lg overflow-hidden block">
                                <img
                                    className="hover:scale-125 ease-in duration-150"
                                    src={product.image}
                                    alt={product.name}
                                />

                            </picture>

                            <h1 className="mt-4 mb-2 text-[14px] font-[500]">{product.name}</h1>
                            <p className="text-[16px] font-[600]">
                                {product.price}
                            </p>
                        </div>
                    ))}
                </div>
                {isLoading && (
                    <div className="flex justify-center mt-4">
                        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductList;
