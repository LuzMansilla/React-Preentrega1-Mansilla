import cart from './assets/cart.svg'
import './CartWidget.css'

const CartWidget = () => {
    return(
        <div className='cartwidget'>
            <img src={cart} alt="cart-widget" />
            0
        </div>
    )
}

export default CartWidget