import React, { useEffect, useState } from 'react'
import { dummyPublishedCreationData } from '../assets/assets'
import { Heart } from 'lucide-react';
import { useUser } from '@clerk/clerk-react'; // Add this import

const Community = () => {
  const [creations, setCreations] = useState([])
  const { user } = useUser() 

  const fetchCreations = async () => {
    setCreations(dummyPublishedCreationData)
  }

  useEffect(() => {
    fetchCreations()
  }, [user]) 

  return (
    <div className='flex-1 h-full flex flex-col gap-4 p-6'>
      <h2 className='text-xl font-semibold'>Creations</h2>
      <div className='bg-white h-full w-full rounded-xl overflow-y-scroll p-3'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {creations.map((creation, index) => ( 
            <div key={index} className='relative group'>
              <img 
                src={creation.content} 
                alt={creation.prompt} 
                className='w-full h-64 object-cover rounded-lg'
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found'
                }}
              />
              <div className='absolute inset-0 flex gap-2 items-end justify-between p-3 group-hover:bg-gradient-to-b from-transparent to-black/80 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity'>
                <p className='text-sm'>{creation.prompt}</p>
                <div className='flex gap-1 items-center'>
                  <p>{creation.likes?.length || 0}</p> 
                  <Heart 
                    className={`min-w-5 h-5 hover:scale-110 cursor-pointer ${
                      user && creation.likes?.includes(user.id) 
                        ? 'fill-red-500 text-red-600' 
                        : 'text-white'
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Community