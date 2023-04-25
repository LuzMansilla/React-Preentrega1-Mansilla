import { Link } from "react-router-dom"

import '../Item/Item.css'

const Item = ({cuadro}) => {
    return (
            <div key={cuadro.id} className="card w-25">
                <img src={cuadro.foto} className="card-img-top" alt="imagen-card" />
                <div className="card-body">
                    <h6>Nombre: {cuadro.nombre}</h6>
                    <label>Precio: {cuadro.precio}</label>
                    <div>Categoria: {cuadro.categoria}</div>
                </div>
                <div className="card-footer">
                    <Link to={`/item/${cuadro.id}`}>
                        <button className="btn btn-outline-dark">Detalle</button>
                    </Link>
                </div>
            </div>
    )
}

export default Item