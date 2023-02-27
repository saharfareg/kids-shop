import React from 'react'
import  {Link, Outlet}  from "react-router-dom";
export const AboutUs = () => {
  return (
    <div className='text-center'>AboutUs
    <Link to='dashboard'>dashboard</Link>
    <Outlet></Outlet>
    </div>
  )
}
