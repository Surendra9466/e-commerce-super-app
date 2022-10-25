import { Link } from 'react-router-dom';
import React from 'react';
import ProductSearch from '../../assets/ProductSearch.svg'

export default function ProductList({ product, viewType }) {
    const { name, price, image, description } = product;

    return (
        <div className='product-item'>
            <div className='product-img-wrapper'>
                <img className='product-img' src={image} alt={name} />
                {viewType === 'gridView' && <Link to={`/products/${product.id}`}><div className='search-icon-wrapper cursor-pointer'><img className='search-icon' src={ProductSearch} /></div></Link>}
            </div>
            <div className='product-details'>
                <h5>{name}</h5>
                <p className='text-secondary'>${price}</p>
                {viewType === 'listView' && <>
                    <p className='description'>{description}</p>
                    <Link to={`/products/${product.id}`}><button className='detail-btn'>Details</button></Link></>}
            </div>
        </div>
    )
}
