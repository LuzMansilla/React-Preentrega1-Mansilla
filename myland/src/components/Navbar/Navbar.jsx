import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


const NavBarr =()=>{
    return(
        <nav>
            <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">MY LAND</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#cuadrosDeAcrilico">Cuandros de Acrílico</Nav.Link>
                <Nav.Link href="#cuadrosDePasteles">Cuadros de Pasteles</Nav.Link>
                <Nav.Link href="#cuadrosDeLapiz">Cuadros de Lápiz</Nav.Link>
            </Nav>
            </Container>
            </Navbar>
            <br />
            <CartWidget/>
            <br />
        </nav>
    )
}

export default NavBarr