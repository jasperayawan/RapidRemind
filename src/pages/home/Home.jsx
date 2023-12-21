import React from 'react'
import { Outlet } from 'react-router-dom'
import SidebarContent from '../../components/sidebar content/SidebarContent'

export default function Home() {
  return (
    <div className='flex'>
        <div className="flex-[1] border-r-[1px] border-zinc-200 h-screen sticky top-0 left-0 bg-zinc-50 py-4">
              <SidebarContent />
        </div>
        <div className="flex-[4.1 p-5]">
          <Outlet />
        </div>
      </div>
  )
}
