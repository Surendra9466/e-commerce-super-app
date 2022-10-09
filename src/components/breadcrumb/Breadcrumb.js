import React from 'react'
import './breadcrum.scss'
import { Link } from 'react-router-dom';
export default function Breadcrumb({ BreadcrumbValue }) {
  return (
    <div className='breadcrumb-wrapper bg-accent flex items-center px-4'>
      <div className='breadcrumb text-secondary text-xl font-semibold mx-auto '>
        <Link to="/">Home</Link> 
        <span> / {BreadcrumbValue}</span>
      </div>
    </div>
  )
}
