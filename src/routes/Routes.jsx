import React from 'react'
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import CreateNote from '../components/create note/CreateNote'
import App from '../App'

export default function ProjectRoutes() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<App />}>
                <Route index path='/' element={<Home />}/>
                <Route path='/createnote' element={<CreateNote />}/>
            </Route>
        </Routes>
    </Router>
  )
}
