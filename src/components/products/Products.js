import React from 'react'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import './product.scss';
import ProductList from './ProductList';
// https://course-api.com/react-store-products
export default function Products() {

  return (
    <>
      <Breadcrumb BreadcrumbValue={'Products'} />
      <main className='product-section lg:mt-8 font-poppins'>
        <div className='product-container mx-auto lg:gap-12 flex-col md:flex-row'>
          <aside className='filter-wrapper'>filter section</aside>
          <section className='product-item-wrapper flex-1'>
            <div className='product-header'>
              <div className='product-count text-base'>
                23 products found
              </div>
            </div>
            <div className='products-wrapper flex flex-wrap gap-6'>
              <ProductList />
              <ProductList />
              <ProductList />
              <ProductList />
              <ProductList />
              <ProductList />
              <ProductList />
              <ProductList />
              <ProductList />
              <ProductList />
              <ProductList />
              <ProductList />
              <ProductList />
              <ProductList />
              <ProductList />
              <ProductList />
              <ProductList />
              <ProductList />
              <ProductList />
              <ProductList />
              <ProductList />
              <ProductList />
              <ProductList />
              <ProductList />
              <ProductList />
              <ProductList />
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
