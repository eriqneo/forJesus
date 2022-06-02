import React from 'react'

const Ministries = () => {
    const data = [
        {
            image: "./jcc1.jpg",
            title: "Men's Ministry",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro reprehenderit exercitationem culpa nisi velit dignissimos impedit veniam obcaecati voluptate?",
            button: "Join Us"
        },
        {
            image: "./jcc2.jpg",
            title: "Women's Ministry",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro reprehenderit exercitationem culpa nisi velit dignissimos impedit veniam obcaecati voluptate? ",
            button: "Join Us"
        },
        {
            image: "./jcc3.jpg",
            title: "Youth Ministry",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro reprehenderit exercitationem culpa nisi velit dignissimos impedit veniam obcaecati voluptate? ",
            button: "Join Us"
        },
        {
            image: "./jcc4.jpg",
            title: "Sunday School Ministry",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro reprehenderit exercitationem culpa nisi velit dignissimos impedit veniam obcaecati voluptate? ",
            button: "Join Us"
        },
    ]

    const services = [
        {
            days: "Monday - Saturday",
            time1: "5:00 AM - 7:00 AM : Morning Glory",
            time2: "1:00 PM - 2:00 PM : Afternoon Service",
            time3: "5:00 PM - 7:00 PM : Evening Service",
            time4: "9:00 PM - 5:00 AM : Friday Night Kesha",
        },
        {
            days: "Sunday",
            time1: "6:00 AM - 9:00 AM : 1st Service",
            time2: "9:00 AM - 1:00 AM : 2nd Service",
            time3: "11:00 AM - 1:00 PM: 3rd Service",
            time4: "11:00 AM - 1:00 PM: Teens & Sunday School Service",

        }
    ]

  return (
      <section>
          <div className='ml-5 mt-8 grid grid-cols-1 md:grid-cols-4 gap-2 mb-7'> 
              {data.map((item) => (
                  <div key={item.title} className='max-w-sm rounded overflow-hidden shadow-lg' >
                      <img src={item.image} alt="" className='w-full' loading='eager' />
                      <div className='px-6 py-4'>
                          <div className='font-bold text-xl mb-2'>{item.title} </div>
                          <p className='text-gray-700 text-base'>{item.desc} </p>
                      </div>
                      <div className='mb-2 block text-center'>
                          <button className='rounded-lg bg-purple-900 py-4 px-7 text-white hover:bg-purple-700 border border-white mt-2'>{item.button} </button> 
                      </div>
                  </div>
               ))}
          </div>

          <div className='watch'>
              <div className='block text-center text-white'>
                  <h4 className='font-bold text-3xl pt-4 mb-5'>Listen and Watch Us Live On</h4>
                  <div className='grid grid-cols-1 md:grid-cols-2'>
                      {services.map((service) => (
                          <div className=''>
                              <h5 className='text-2xl font-bold pb-2'> {service.days}</h5>
                              <ul className='pb-2 text-xl'>
                                  <li> {service.time1} </li>
                                  <li> {service.time2} </li>
                                  <li> {service.time3} </li>
                                  <li> {service.time4} </li>
                              </ul>
                          </div>
                      ))}  
                  </div>
                  <div>
                    <button className='rounded-2xl bg-inherit hover:bg-white hover:text-purple-900 border border-black px-16'><i className='bx bx-play bx-lg'></i></button>
                    <ul className='flex flex-row text-2xl font-bold space-x-3 justify-center'>
                      <li>HLC TV</li>
                      <li>JCC TV</li>
                      <li>JCC Radio</li>
                      <li>HLC Radio</li>
                      <li>Facebook</li>
                      <li>Youtube</li>
                      </ul>
                     
                 </div>
              </div>
          </div>
     
    </section>
  )
}

export default Ministries
