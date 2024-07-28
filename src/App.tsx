import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import AppRoutes from './routes'
import { store } from './store'

import Footer from './components/Footer'
import Cart from './pages/Cart'

import { GlobalStyle } from './styles'
import Delivery from './pages/Delivery'
import Payment from './pages/Payment'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <AppRoutes />
        <Footer />
        <Cart />
        <Delivery />
        <Payment />
      </BrowserRouter>
    </Provider>
  )
}

export default App
