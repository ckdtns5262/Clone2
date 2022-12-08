import React from 'react'
import {MdLibraryMusic} from 'react-icons/md'
import cover from '../image/cover1.jpeg'
import cover2 from '../image/cover2.jpeg'
import cover3 from '../image/cover3.jpeg'
import cover4 from '../image/cover4.jpeg'
import cover5 from '../image/cover5.jpeg'
import cover6 from '../image/cover6.jpeg'
import cover7 from '../image/cover7.jpeg'
import cover8 from '../image/cover8.jpeg'
import cover9 from '../image/cover9.jpeg'

import Song from './Song'


const Trending = () => {
  const songs = [
    { title : "별의조각",
      singer : "윤하",
      cover : cover
    },
    { title : "Life is Wet",
    singer : "CAMO",
    cover : cover2
    },  
    { title : "OUT OF MY SIGHT",
    singer : "릴러말즈",
    cover : cover3
    },
    { title : "라일락",
    singer : "아이유",
    cover : cover4
    },
    { title : "나의 사춘기에게",
    singer : "볼빨간사춘기",
    cover : cover5
    },  
    { title : "Parade",
    singer : "윤하",
    cover : cover6
    },
    { title : "Despacito",
    singer : "JFla",
    cover : cover7
    },
    { title : "작은것들을 위한 시",
    singer : "BTS",
    cover : cover8
    },
    { title : "서랍",
    singer : "10cm",
    cover : cover9
    },
  ]


  return (
    <div className='text-white px-4 lg:max-w-[90vw] mx-auto mt-5'>
    {/*Title*/}
    <div className='pt-8 flex items-center justify-between'>
      <div className=''>
        <p className='text-[15px]'>이 노래로 뮤직 스테이션 시작하기</p>
        <p className='text-[32px]'>빠른 선곡</p>
      </div>
      <MdLibraryMusic className='text-[30px]'/>
    </div>
    {/*Songs*/}
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4'>
    {songs.map((song)=>
      <Song title={song.title} singer={song.singer} cover={song.cover} key={song.title}/>
    )}
      </div>
    </div>
  )
}

export default Trending