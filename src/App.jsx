import './App.css'
import SidebarContent from './components/sidebar content/SidebarContent'
import { Outlet } from 'react-router-dom'
import ProjectRoutes from './routes/Routes'

function App() {

  return (
    <ProjectRoutes />
  )
}

export default App
