import React, { useEffect, useState } from 'react';
import './single-product.scss';
import { Link, useParams } from 'react-router-dom';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import Slider from '../slider/Slider.js';

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
  console.log(singleProduct.images);
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
        </div>
      </div>
    </div>
  )
}
