import React from 'react'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import aboutUs from '../../assets/aboutUs.jpeg';
import './about_us.scss';

export default function About() {

  const breadcrumbData = [
    {
      name: 'Home',
      path: '/'
    }
  ]

  return (
    <>
      <Breadcrumb BreadcrumbValue="About" breadcrumbData={breadcrumbData} />
      <div className='about_us'>
        <img className='about-us-img' src={aboutUs} alt="about-us-img" />
        <article>
          <h2 className='title'>Our Story</h2>
          <div className='underline'></div>
          <p className='content'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.
          </p>
        </article>
      </div>
    </>
  )
}
