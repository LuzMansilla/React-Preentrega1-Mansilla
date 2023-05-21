import { Link } from "react-router-dom"
import '../Item/Item.css'


const Item = ({cuadro}) => {
    return (
            <div key={cuadro.id} className="card w-25 col-sm-12 col-md-4 col-lg-3">
                <img src={cuadro.foto} className="card-img-top" alt="imagen-card" />
                <div className="card-body">
                    <h6>Nombre: {cuadro.nombre}</h6>
                    <h6>Precio: ${cuadro.precio}</h6>
                    <h6>Tamaño: {cuadro.tamaño}</h6>
                    <h6>Categoria: {cuadro.categoria}</h6>
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