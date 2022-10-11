import React, { useState, useEffect } from 'react'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import './product.scss';
import ProductList from './ProductList';
import Loader from '../loaderSpinner/Loader';
// https://course-api.com/react-store-products
export default function Products() {

  const [productList, setProductList] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch('https://course-api.com/react-store-products')
      .then((res) => res.json())
      .then((data) => {
        setProductList(data)
        setLoader(false);
      })

  }, [])

  return (
    <>
      <Breadcrumb BreadcrumbValue={'Products'} />
      <main className='product-section lg:mt-8 font-poppins'>
        <div className='product-container mx-auto lg:gap-12 flex-col md:flex-row mb-12'>
          <aside className='filter-wrapper'>filter section</aside>

          <section className='product-item-wrapper flex-1'>
            {loader ? <Loader /> :
              <>
                <div className='product-header'>
                  <div className='product-count text-base'>
                    {productList.length} products found
                  </div>
                </div>
                <div className='products-wrapper flex flex-wrap gap-6'>
                  {productList.map((product, index) => {
                    console.log(product);
                    return <ProductList key={product.id} product={product} />
                  })}
                </div>
              </>
            }
          </section>
        </div>
      </main>
    </>
  )
}
