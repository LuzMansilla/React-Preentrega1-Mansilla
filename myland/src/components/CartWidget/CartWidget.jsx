import { Link } from 'react-router-dom'
import { useCartContext } from '../CartContext/CartContext'
import './CartWidget.css'

const CartWidget = () => {
    const {cantTotalCompra} = useCartContext()
    return(
        <>
            {cantTotalCompra() != 0 && cantTotalCompra()}
            <Link to='/cart' className='cartwidget'>
                🛒
            </Link>

        </>
    )
}

export default CartWidget