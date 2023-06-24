import React from 'react';
import Image from 'next/image';

const Author = ({author}) => {
  return (
    <div className='mt-20 mb-8 p-12 relative rounded-lg bg-white'>
        <Image
          alt={author.name}
          unoptimized
          height={100}
          width={100}
          className='rounded-full'
          src={author.photo.url}
        />
        <h3 className='text-black my-4 text-xl font-bold'>
          {author.name}
        </h3>
        <p className='text-black text-lg'>
          {author.bio}
        </p>
    </div>
  )
}

export default Author