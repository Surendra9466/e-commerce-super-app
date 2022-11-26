import React from 'react';
import { Link } from "react-router-dom";
import heroImg from '../../assets/hero-img.jpeg';
import './home.scss';
import Mission from './Mission';

export default function Home() {
  return (
    <div className='home-wrapper'>
      <div className='main-section'>
        <div className='content'>
          <div className='content-left'>
            <h1 className='capitalize font-bold'>design your <br /> comfort zone</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
            <Link to="/products" className='uppercase cursor'>shop now</Link>
          </div>
          <div className='content-right'>
            <img src={heroImg} />
          </div>
        </div>
        <Mission />
      </div>
    </div>
  )
}
