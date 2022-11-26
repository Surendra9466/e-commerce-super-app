import React from 'react'
import './breadcrum.scss'
import { Link } from 'react-router-dom';
export default function Breadcrumb({ BreadcrumbValue="", breadcrumbData }) {
  return (
    <div className='breadcrumb-wrapper bg-accent flex items-center px-4'>
      {breadcrumbData.length > 0 ? <div className='breadcrumb text-secondary text-xl font-semibold mx-auto '>
        {breadcrumbData.map((item, index) => {
          return <Link key={index} to={item.path}>{item.name} / </Link>
        })}
        {BreadcrumbValue ? <span className='capitalize'>{BreadcrumbValue}</span> : null}
      </div> : ''}
    </div>
  )
}
