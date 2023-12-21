import './App.css'
import SidebarContent from './components/sidebar content/SidebarContent'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='flex'>
      <div className="flex-[1] border-r-[1px] border-zinc-200 h-screen sticky top-0 left-0 bg-zinc-50 py-4">
            <SidebarContent />
      </div>
      <Outlet />
    </div>
  )
}

export default App
