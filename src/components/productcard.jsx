import React from 'react';
import Button from './button';

const ProductCard = () => {
    const image = "https://m.media-amazon.com/images/I/81-pe8AZQLL._AC_UF1000,1000_QL80_.jpg";
    const name = "Monitor";
    const price = "100000";

    return (
        <div className="max-w-xs rounded-lg border border-gray-200 bg-white shadow-lg overflow-hidden mt-20 mx-auto">
            <img src={image} alt={name} className="w-full object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                <p className="text-lg text-gray-600 mt-1">Price: ${price}</p>
                <Button className="mt-4 w-full py-2 px-4 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 cursor-pointer" />
            </div>
        </div>
    );
};

export default ProductCard;
