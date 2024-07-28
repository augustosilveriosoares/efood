import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Category from './pages/Category'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:id" element={<Category />} />
    </Routes>
  )
}

export default AppRoutes
