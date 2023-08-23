import React from 'react'
import Trending from '../components/Trending'
import Markets from '../components/Markets'

const Homepage = () => {
  return (
    <div className='wrapper-container'>
        <Trending />
        <Markets />
    </div>
  )
}

export default Homepage
