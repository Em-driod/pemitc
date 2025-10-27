import { Link } from "react-router-dom";

import React from 'react'

const Home = () => {
  return (
    <div>   <h2>Home Page</h2>
    <p>Welcome to the application!</p>
    <nav>
      <Link to={'/faruq'}>
      view in hd
      </Link>
    </nav></div>
  )
}

export default Home