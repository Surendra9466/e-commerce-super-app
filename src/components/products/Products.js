import React, { useState, useEffect } from 'react'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import './product.scss';
import ProductList from './ProductList';
import Loader from '../loaderSpinner/Loader';
// https://course-api.com/react-store-products
import productData from '../../productData.js';
export default function Products() {

  const [productList, setProductList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [viewType, setViewType] = useState('gridView');

  // useEffect(() => {
  //   fetch('https://course-api.com/react-store-products')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProductList(data)
  //       setLoader(false);
  //     })
  // }, [])


  function toggleView(e) {
    if (e.target.closest('button').dataset.type === 'gridView') {
      setViewType('gridView');
    } else {
      setViewType('listView');
    }
  }

  return (
    <>
      {/* <Breadcrumb BreadcrumbValue={'Products'} /> */}
      <main className='product-section md:mt-8 font-poppins'>
        <div className='product-container mx-auto lg:gap-12 flex-col md:flex-row mb-12'>
          <aside className='filter-wrapper'>filter section</aside>

          <section className='product-item-wrapper flex-1'>
            {loader ? <Loader /> :
              <>
                <div className='product-header flex gap-3 md:gap-6 flex-col md:flex-row'>
                  <div className='view-switch-buttons flex gap-1' onClick={toggleView}>
                    <button className={`${viewType === 'gridView' ? 'active' : ''}`} data-type="gridView">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1 2.5A1.5 1.5 0 012.5 1h3A1.5 1.5 0 017 2.5v3A1.5 1.5 0 015.5 7h-3A1.5 1.5 0 011 5.5v-3zm8 0A1.5 1.5 0 0110.5 1h3A1.5 1.5 0 0115 2.5v3A1.5 1.5 0 0113.5 7h-3A1.5 1.5 0 019 5.5v-3zm-8 8A1.5 1.5 0 012.5 9h3A1.5 1.5 0 017 10.5v3A1.5 1.5 0 015.5 15h-3A1.5 1.5 0 011 13.5v-3zm8 0A1.5 1.5 0 0110.5 9h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 019 13.5v-3z" clipRule="evenodd"></path></svg>
                    </button>
                    <button className={`${viewType === 'listView' ? 'active' : ''}`} data-type="listView">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2.5 11.5A.5.5 0 013 11h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 7h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 3h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </div>
                  <div className='product-count text-base'>
                    {productList.length} products found
                  </div>
                </div>
                <div className={`products-wrapper ${viewType}`}>
                  {productData.map((product, index) => {
                    return <ProductList key={product.id} product={product} viewType={viewType} />
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
