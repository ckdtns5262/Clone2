import React from 'react'
import Card from './Card'
import cover10 from '../image/cover10.jpeg'
import cover11 from '../image/cover11.jpeg'
import cover12 from '../image/cover12.jpeg'
import cover13 from '../image/cover13.jpeg'
import cover14 from '../image/cover14.jpeg'
import cover15 from '../image/cover15.jpeg'
import cover16 from '../image/cover16.jpeg'
import cover17 from '../image/cover17.jpeg'
import cover18 from '../image/cover18.jpeg'
import cover19 from '../image/cover19.jpeg'
import cover20 from '../image/cover20.jpeg'

    

const Jazz = () => {
  const trendingSongs = [
    {
      title: 'OHAYO MY Night',
      singer: 'D.Hack',
      cover: cover10
    },
    {
      title: 'All I Wanna Do',
      singer: 'Jay Park',
      cover: cover11
    },
    {
      title: 'thank u, next',
      singer: 'Ariana Grande',
      cover: cover12
    },
    {
      title: 'METEOR',
      singer: 'CHANGMO',
      cover: cover13
    },
    {
      title: '별의 조각',
      singer: '윤하',
      cover: cover14
    },
    {
      title: '있잖아',
      singer: 'Paul Kim',
      cover: cover15
    },
    {
      title: 'All Of my Life',
      singer: '박원',
      cover: cover16
    },
    {
      title: '자격지심(feat.ZICO)',
      singer: 'BEO (비오)',
      cover: cover17
    },
    {
      title: 'Strawberry Moon',
      singer: 'IU',
      cover: cover18
    },
    {
      title: '허리춤',
      singer: 'OVAN',
      cover: cover19
    }, {
      title: '옥탑방',
      singer: 'N.Flying',
      cover: cover20
    }

  ]

  return (
    <div className='text-white px-4 lg:max-w-[90vw] mx-auto mt-5'>
      {/*Title*/}
      <div className='pt-8 flex items-center justify-between'>
        <div className=''>
          <p className='text-[15px]'>아래 아티스트를 좋아한다면</p>
          <p className='text-[32px]'>다시 듣기</p>
        </div>
      </div>
      {/*Cards*/}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
      lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-5'>
        {trendingSongs.map((song) => (
          <Card title={song.title} singer={song.singer}
            cover={song.cover} key={song.singer} />
        ))}
      </div>
    </div>
  )
}

export default Jazz