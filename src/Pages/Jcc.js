import React from 'react'
import {Carousel} from 'react-carousel-minimal'

import Ministries from './PageComponent/Ministries';

function App() {
 const data = [
    {
      image: "./jcc1.jpg",
      caption: "Light House Of Africa"
    },
    {
      image: "./jcc2.jpg",
      caption: "Come Worship The Lord"
    },
    {
      image: "./jcc3.jpg",
      caption: "Light House Of Africa"
    },
    {
      image: "./jcc4.jpg",
      caption: "Come Worship The Lord"
    },
    {
      image: "./jcc5.jpg",
      caption: "Light House Of Africa"
    },
    {
      image: "./jcc6.jpg",
      caption: "Come Worship The Lord"
    },
    {
      image: "./jcc7.jpg",
      caption: "Light House Of Africa"
    },
    {
      image: "./jcc8.jpg",
      caption: "Come Worship The Lord"
    },
    {
      image: "./jcc9.jpg",
      caption: "Light House Of Africa"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
      <div className="">
      <div style={{ textAlign: "center" }} className='mt-0'>
        <div style={{
                  padding: "0 20px",
        }}>
          <Carousel
            data={data}
            time={3000}
            width="850"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "max",
              maxHeight: "max",
                margin: "10px auto",
            }}
          />
        </div>
      </div>
      <div className='z-2 absolute mb-10 top-40 ml-16 border border-purple-700'>
           <a href="http://localhost:3000/jcc" className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Jesus Celebration Center Kisumu</h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far,
                      in reverse chronological order. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, consequatur neque tenetur eaque aut qui omnis cupiditate.
                      Aspernatur, illum! Reiciendis ullam quidem sint atque, ab nisi autem error, quisquam harum, ipsam esse nam similique minima laudantium consequuntur necessitatibus officia amet magni.
                      Velit pariatur repudiandae expedita labore minus sit impedit officia.</p>
               </a>
    </div>
     <Ministries />
    </div>
  );
}

export default App;
