import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'

const Paths = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/place/:id" element={<Profile />} />
  </Routes>
)

export default Paths
