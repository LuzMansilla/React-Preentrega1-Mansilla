import {Navigate, Route, BrowserRouter as Router,Routes} from 'react-router-dom'
import NavBar from './components/Navbar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemDetail from './components/ItemDetail/ItemDetail'

import 'bootstrap/dist/css/bootstrap.min.css'
//import './App.css'


function App() {

  return (
    <div className="App">
      <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Te damos la Bienvenida"}/>} /> 
            <Route path='/category/:category' element={<ItemListContainer greeting={"Te damos la Bienvenida"}/>} /> 
            
            <Route path='/item/:cid' element={<ItemDetailContainer/>} /> 
            
            <Route path='/' element={<ItemDetail/>} /> 
            
            <Route path='*' element={<Navigate to ='/'/>} /> 
            
          </Routes>
      </Router>
    </div>
  )
}

export default App
