import React from 'react'

const Contact = () => {
/* 
 src="https://www.google.com/maps/embed/v1/place?q=jesus+celebration+centre+kisumu&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a class="googlemaps-code" rel="nofollow" href="https://www.embed-map.com" id="authorizemap-data">https://www.embed-map.com</a><style>#embeddedmap-canvas .text-marker{}.map-generator{max-width: 100%; max-height: 100%; background: none;</style></div>
*/

  return (
      <section className='text bg-gray-300 body-font flex flex-col relative'>
          
          <form action="" className='container px-4 py-14 mx-auto'>
              <div className='flex flex-col text-center w-full mb-12'>
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                        Get In Touch
                  </h1>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora rerum porro fugiat vel autem.
                  </p>
              </div>
              <div className='lg:w-1/2 md:w-2/3 mx-auto'>
                  <div className="flex flex-wrap -m-2">
                      <div className="p-2 w-1/2">
                          <div className='relative'>
                               <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                                 Name
                              </label>
                              <input
                                 type="text"
                                 id="name"
                                 name="name"
                                 className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                              />
                          </div>
                      </div>
                      <div className="p-2 w-1/2">
                          <div className='relative'>
                              <label
                                  htmlFor="email"
                                  className="leading-7 text-sm text-gray-600"
                              >
                                    Email
                              </label>
                              <input
                                 type="email"
                                 id="email"
                                 name="email"
                                 className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                          </div>
                      </div>
                      <div className="p-2 w-full">
                          <div className='relative'>
                              <label
                                 htmlFor="message"
                                 className="leading-7 text-sm text-gray-600"
                                  >
                                Message
                              </label>
                              <textarea
                                id="message"
                                name="message"
                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                ></textarea>
                          </div>
                      </div>
                      <div className="p-2 w-full">
                          <button className="flex mx-auto text-white bg-purple-900 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                              Send Message
                          </button>
                      </div>
                  </div>
              </div>
          </form>
          <div className='container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap'>
              <div className='lg:w-full md:w-1/2 bg-gray-700 rounded-lg overflow-hidden sm:mr-10 p-32 md:p-52 flex items-end justify-start relative'>
              <div className='w-1/2'>
                  <iframe
                   width="100%"
                   height="100%"
                   title="map"
                   className="absolute inset-0"
                   frameBorder={0}
                   marginHeight={0}
                  marginWidth={0}
                  style={{ filter: "opacity(0.7)" }}
                 src="https://www.google.com/maps/embed/v1/place?q=jesus+celebration+centre+kisumu&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                      />
                      <div className="bg-gray-900 relative mr-7 flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-purple-400">
                Odinga Oginga St <br />
                Kisumu, Kenya
              </p>
                        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a  href='mailto' className="text-purple-400 leading-relaxed">
                jccksm@email.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed text-purple-400">+254 784 051 959</p>
            </div>
          </div>
        </div>
                  </div>
                  </div>
           
          
    </section>
  )
}



export default Contact
