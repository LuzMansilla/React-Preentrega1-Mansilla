import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useState } from 'react';
import '../Formulario/Formulario.css'
import { useCartContext } from '../CartContext/CartContext';
import Swal from 'sweetalert2'

function Formulario() {
    const info = {nombre:'', telefono: '', email: ''}
    const [dataForm, setDataForm] = useState(info)
    const {cartList, vaciarCarro, TotalDeCompra} = useCartContext()
    

    const generarOrden = (evt) => {
        evt.preventDefault()

        const order = {}
        order.buyer = dataForm
        order.items = cartList.map(({ nombre, id, precio, cantidad }) => ({ id, nombre, precio, cantidad }))
        order.total = TotalDeCompra()
        console.log(order)

        const dbFirestore = getFirestore()
        const ordersCollection = collection(dbFirestore, 'Orders')

        addDoc(ordersCollection, order)
            .then(resp=> Swal.fire({
                position: 'center',
                icon: 'success',
                title: `Tu compra se realizo con Exito. ID: ${resp.id}`,
                showConfirmButton: true
        }))
            .catch(error => console.log(error))
            .finally(() => {
                setDataForm(info)
                vaciarCarro()
            })
    }

    const handleOnChange = (evt) => {
        setDataForm({
            ...dataForm,
            [evt.target.name]: evt.target.value
        })
    }
    return (
        <form onSubmit={generarOrden}>
            <h3>Completa tus Datos</h3>
            <div className="row">
                <input 
                    type="text" 
                    name="nombre" 
                    className="form-control" 
                    value={dataForm.nombre} 
                    placeholder="Nombre" 
                    onChange={handleOnChange}
                    required
                />
                <input 
                    type="number" 
                    name="telefono" 
                    className="form-control"
                    value={dataForm.telefono} 
                    placeholder="Celular" 
                    onChange={handleOnChange}
                    required
                />
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-control"
                    value={dataForm.email} 
                    placeholder="Email" 
                    onChange={handleOnChange}
                    required
                />   
                <button type="submit" className='btn btn-dark'>Comprar</button>
            </div>
        </form>
    );
}

export default Formulario