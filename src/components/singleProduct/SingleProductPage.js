import React, { useEffect, useState } from 'react';
import './single-product.scss';
import { Link, useParams } from 'react-router-dom';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import Slider from '../slider/Slider.js';
import Button from './Button';

export default function SingleProductPage() {
  const [singleProduct, setSingleProduct] = useState({});
  const { productId } = useParams();
  const breadcrumbData = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Products',
      path: '/products'
    }
  ]
  useEffect(() => {
    fetch(`https://course-api.com/react-store-single-product?id=${productId}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, [])
  return (
    <div className='single-product-wrapper'>
      <Breadcrumb BreadcrumbValue={singleProduct.name} breadcrumbData={breadcrumbData} />
      <div className='product-page-container'>
        <Link className="back-to-product uppercase cursor-pointer" to="/products">back to products</Link>
        <div className='single-product-section'>
          {singleProduct.images && <Slider sliderImages={singleProduct.images} />}
          <section className='content'>
            <h2 className='title capitalize font-bold'>{singleProduct.name}</h2>
            <div>{singleProduct.stars}</div>
            <h5 className='price text-secondary font-bold'>${singleProduct.price}</h5>
            <p className='desc'>{singleProduct.description}</p>
            <p className='info'>
              <span className='font-bold'>Available:</span>
              <span>{singleProduct.stock > 0 ? 'In stock' : 'Out of stock'}</span>
            </p>
            <p className='info'>
              <span className='font-bold'>SKU :</span>
              <span>{singleProduct.id}</span>
            </p>
            <p className='info'>
              <span className='font-bold'>Brand</span>
              <span>{singleProduct.company}</span>
            </p>
          </section>
          <section className='add-to-cart'>
            <div className='colors'>
              <span className='capitalize font-bold'>colors :</span>
              <div className='flex'>
                {singleProduct.colors?.map((color, index) => {
                  return <Button key={index} color={color} index={index}/>
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
