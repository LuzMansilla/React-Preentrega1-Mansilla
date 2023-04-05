import cart from './assets/cart.svg'

const CartWidget = () => {
    return(
        <div>
            <img src={cart} alt="cart-widget" style = {{height: 30 , width: 40}} />
            0
        </div>
    )
}

export default CartWidget