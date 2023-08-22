import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className='relative' >
        <Navbar />
        <img src='https://media.istockphoto.com/id/1358328765/vector/abstract-modern-background.jpg?s=612x612&w=0&k=20&c=3iZFSD8JPruHjc9M2CYdlVTtSExHzO3Z5h6xVjmbfZU='
        alt='bg-img' className='w-full h-screen absolute top-0' />
    </div>
  )
}

export default Home