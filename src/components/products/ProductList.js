import React from 'react';
import ProductSearch from '../../assets/ProductSearch.svg'

export default function ProductList({ product, viewType}) {
    const { name, price, image, description } = product;
    console.log(description);
    return (
        <div className='product-item'>
            <div className='product-img-wrapper'>
                <img className='product-img' src={image} alt={name} />
                {viewType === 'gridView' && <div className='search-icon-wrapper cursor-pointer'><img className='search-icon' src={ProductSearch} /></div> }
            </div>
            <div className='product-details'>
                <h5>{name}</h5>
                <p className='text-secondary'>${price}</p>
                {viewType === 'listView' && <>
                    <p className='description'>{description}</p>
                    <button className='detail-btn'>Details</button></>}

            </div>
        </div>
    )
}
