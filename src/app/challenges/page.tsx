import React from 'react'
import LeftSidebar from '@/features/website/components/challenges/LeftSidebar'
import RightSidebar from '@/features/website/components/challenges/RightSidebar'
import MainFeed from '@/features/website/components/challenges/MainFeed'

const page = () => {
  return (
    <section className='grid md:grid-cols-8 gap-4 bg-gray-50 md:p-8'>
        <LeftSidebar />
        <MainFeed />
        <RightSidebar />
    </section>
  )
}

export default page