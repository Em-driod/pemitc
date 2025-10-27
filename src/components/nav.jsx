import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='bg bg-blue-300 text-4xl flex justify-between p-4'>
      <Link to={"/"}>
    <p>starboy</p>
      </Link>
    <div className='flex gap-4'>
      <Link to ={'/Card'}>
      <p>wizkid</p>
      </Link>
      <Link to={"/service"}>
    <p>oxlade</p>
      </Link>
    <p>davido</p>
    </div>
    </div>
  )
}

export default Nav