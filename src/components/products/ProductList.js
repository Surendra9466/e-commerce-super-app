import React from 'react';
import ProductSearch from '../../assets/ProductSearch.svg'

export default function ProductList() {
    return (
        <div className='product-item'>
            <div className='product-img-wrapper'>
                <img className='product-img' src="https://dl.airtable.com/.attachmentThumbnails/89ba7458c24252be77f5a835dd398880/c13ef359" alt="img" />
                <div className='search-icon-wrapper cursor-pointer'><img className='search-icon' src={ProductSearch} /></div>
            </div>
            <div className='product-details flex justify-between mt-4 capitalize'>
                <h5>modern poster</h5>
                <p className='text-secondary'>$30.99</p>
            </div>
        </div>
    )
}
