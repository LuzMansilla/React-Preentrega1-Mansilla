import './App.css'
import NavBarr from './components/Navbar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Te damos la Bienvenida"}/>
    </div>
  )
}

export default App
