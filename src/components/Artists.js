import React, { useState } from 'react'
import at1 from '../image/art1.jpeg'
import at2 from '../image/art2.jpeg'
import at3 from '../image/art3.jpeg'
import at4 from '../image/art4.jpeg'
import at5 from '../image/art5.jpeg'
import at6 from '../image/art6.jpeg'


const Artists = () => {
    
    const [picture, setPicture] = useState(0)
    const artists = [
        { picture: at1, css: "" },
        { picture: at2, css: "" },
        { picture: at3, css: "" },
        { picture: at4, css: "" },
        { picture: at5, css: "" },
        { picture: at6, css: "" },
    ]
    const handlerOver=(e)=>{
       console.log("안녕")
       
    }


    return (
        <div className='flex items-center justify-center gap-4 pt-5'>
            {artists.map((artist) => (
                <div className='flex h-40 w-40' key={artist.picture}>
                    <img src={artist.picture} alt=""
                        className='object-cover rounded-full' onMouseOver={()=>{
                         handlerOver()
                        }} />
                </div>
            ))}
        </div>
    )
}

export default Artists