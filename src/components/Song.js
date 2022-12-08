import React from 'react'

const Song = ({title,singer,cover}) => {
  return (
    <div className='flex items-center justify-between '>
     <div className='flex'>
        <img 
        src={cover} 
        alt=''
        className='w-24 object-cover -m-[1px] -p-[1px] bg-white'/>
        </div>
        <div className='pr-8 text-end  bg-black  hover:bg-red-700/90 w-full h-full'>
            <p className='text-[19px]'>{title}</p>
            <p className=''>{singer}</p>
        </div>
    </div>
  )
}

export default Song