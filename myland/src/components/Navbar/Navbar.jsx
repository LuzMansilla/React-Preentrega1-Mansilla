import { Link, NavLink} from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './Navbar.css'


const NavBar =()=>{

    return(
        <nav>
            <Navbar bg="dark" variant="dark">
            <Container>
                <Link to = '/' >
                    <Navbar.Brand>
                        <img src="/ML.png" className="imagen"></img>MY LAND</Navbar.Brand>
                </Link>
                <Nav className="me-auto">
                    <NavLink to={`/category/Acrilico`} className={({isActive}) => isActive ? 'btn btn-light' : 'btn btn-dark'}>Cuadros de Acrílico</NavLink>
                    <NavLink to={`/category/Pasteles`} className={({isActive}) => isActive ? 'btn btn-light' : 'btn btn-dark'}>Cuadros de Pasteles</NavLink>
                    <NavLink to={`/category/Lapiz`} className={({isActive}) => isActive ? 'btn btn-light' : 'btn btn-dark'}>Cuadros de Lápiz</NavLink>
                </Nav>
            <CartWidget/>
            </Container>
            </Navbar>
        </nav>
    )
}

export default NavBar