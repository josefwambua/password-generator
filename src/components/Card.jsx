import React from 'react'

const Card = () => {
  return (
    <div className="mt-6 mb-5 w-full max-w-auto mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-800 text-orange-500 hide-scrollbar">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
      <img src="3d.png" alt="pg" 
      className='w-full h-full flex flex-col border-spacing-2 rounded-md'/>
        <h1 className='text-2xl bg-blue-500 text-white text-center p-4'>
        Purenasty
        </h1>
        <p className='text-md-4 bg-violet-500 flex flex-col p-2 text-purple'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, voluptatibus 
          iste quo earum libero corrupti voluptates aspernatur vero hic porro.<br/>
          <strike>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi facere, quidem ex quas rem dolorum!
            <br/>
          </strike>
         <marquee behavior="rough" direction="top-right">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</marquee> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, eaque.</p>
    
         
      <img src="3d.png" alt="pg" 
      className='w-full h-full flex flex-col border-spacing-2 rounded-md'/>
        <h1 className='text-2xl bg-blue-500 text-white text-center p-4'>
        Purenasty
        </h1>
        <p className='text-md-4 bg-violet-500 flex flex-col p-2 text-purple'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, voluptatibus 
          iste quo earum libero corrupti voluptates aspernatur vero hic porro.<br/>
          <strike>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi facere, quidem ex quas rem dolorum!
            <br/>
          </strike>
         <marquee behavior="rough" direction="top-right">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</marquee> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, eaque.</p>
    </div>


    
    
    </div>
    
  )
}

export default Card
