import {Navigate, Route, BrowserRouter as Router,Routes} from 'react-router-dom'

import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { CartContextProvider } from './components/CartContext/CartContext'
import NavBar from './components/Navbar/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemDetail from './components/ItemDetail/ItemDetail'
import Cart from './components/Cart/Cart'

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  return (
    <CartContextProvider>

      <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Te damos la Bienvenida"}/>} /> 
            <Route path='/category/:category' element={<ItemListContainer greeting={"Te damos la Bienvenida"}/>} /> 
            
            <Route path='/item/:cid' element={<ItemDetailContainer/>} /> 
            
            <Route path='/' element={<ItemDetail/>} /> 
            <Route path='/cart' element={<Cart/>} /> 
            
            <Route path='*' element={<Navigate to ='/'/>} /> 
            
          </Routes>
      </Router>
      
    </CartContextProvider>
  )
}

export default App
