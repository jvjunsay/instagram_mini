import React from 'react';

function Story ({ img, username }) {
  return (
    <div className='z-0'>
      <img
        className='h-14 w-14 p-[1.5px] border-2 border-red-500 object-contain rounded-full cursor-pointer hover:scale-110 transition duration-200 ease-out'
        src={img}
        alt=''
      />

      <p className='text-xs w-14 text-center truncate'>{username}</p>
    </div>
  );
}

export default Story;
