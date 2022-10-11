import React from 'react';
import ProductSearch from '../../assets/ProductSearch.svg'

export default function ProductList({product}) {
    const {name, price, image} = product;
    return (
        <div className='product-item'>
            <div className='product-img-wrapper'>
                <img className='product-img' src={image} alt={name} />
                <div className='search-icon-wrapper cursor-pointer'><img className='search-icon' src={ProductSearch} /></div>
            </div>
            <div className='product-details flex justify-between mt-4 capitalize'>
                <h5>{name}</h5>
                <p className='text-secondary'>${price}</p>
            </div>
        </div>
    )
}
