import { useCartContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'
import Formulario from '../Formulario/Formulario'
import '../Cart/Cart.css'
import { CartDetail } from '../CartDetail/CartDetail'

const Cart = () => {
  const {cartList} = useCartContext()
    
  return (
    <div>
      <h1>Tu Carrito</h1>
      {cartList.length != 0 ?
        <>
          <CartDetail/>
          <Formulario/>
        </>
      : 
          <div>
            <h3>No hay productos seleccionados en el carrito</h3>
            <Link to = '/' className='home'>
              <button className='btn btn-outline-light'>Home</button>
            </Link>
          </div>
      } 
    </div>
  )
}

export default Cart


