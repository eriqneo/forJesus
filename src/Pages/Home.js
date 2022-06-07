import React from 'react'
import Sermons from './PageComponent/Sermons'

const Home = () => {
  return (
    <section>
    <main className='home text-gray-100 h-max pb-20 '>
      <div className='pt-7 pb-7 text-center'>
        <h1 className='text-7xl'>MARK KEGOHI MINISTRIES</h1>
        <h1 className='text-4xl'>The Light House Of Africa</h1>
      </div>
      <div className='block text-center ml-5 mt-5 p-6 max-w-sm bg-white rounded-lg border border-violet-800 shadow-md hover:bg-purple-900'>
        <h2 className='text-black font-bold text-4xl mb-1 hover:text-white '>Bishop Mark Kegohi</h2>
        <p className='text-purple-900 hover:text-white '>Is Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam repudiandae animi dolore sit praesentium ratione nulla laudantium voluptatibus. Accusamus, molestiae.
        </p>
        <button className='rounded-lg bg-purple-900 py-4 px-7 text-white hover:bg-purple-700 border border-white mt-2'>Join Us</button>
      </div>
      </main>
      <Sermons />
    </section>
  )
}
  
export default Home
