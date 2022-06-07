import React from 'react'

const Sermons = () => {
  const sermons = [
    {
      img: './jcc11.jpg',
      title: 'Law of The Spiritual Realm',
      desc: 'Preached by Bishop Mark Kegohi',
    },
    {
      img: './jcc12.jpg',
      title: 'Laws of Spiritual Realm',
      desc: 'Preached by Bishop Mark Kegohi',
    },
    {
      img: './jcc13.jpg',
      title: 'Laws of The Realm',
      desc: 'Preached by Bishop Mark Kegohi',
    },
    {
      img: './jcc14.jpg',
      title: 'Laws of The Spirit Realm',
      desc: 'Preached by Bishop Mark Kegohi',
    }
  ]
  return (
    <div>
      <h1 className='text-6xl text-gray-700 font-bold text-center pt-3'>Sermons</h1>
      <a href="youtube.com" className='ml-5 mt-8 grid grid-cols-1 md:grid-cols-4 gap-3 mb-11 m-7'>
        {sermons.map((sermon) => (
          <div key={sermon.title} className = 'relative overflow-hidden shadow-2xl'>
            <img src={sermon.img} alt="sermon" className='object-cover w-full h-48 transition-opacity rounded-lg opacity-75 hover:opacity-100' />
            <div className='absolute top-0 left-0 text-white px-3 py-3'>
              <strong> {sermon.title}</strong> <br />
              <small>{sermon.desc} </small>
            </div>
            <div className='absolute bottom-0 right-0'>
              <strong className='text-white pr-3 pb-2'>Watch Sermon</strong>
            </div>
          </div>
        ))}
      </a>
      
    </div>
  )
}

export default Sermons
