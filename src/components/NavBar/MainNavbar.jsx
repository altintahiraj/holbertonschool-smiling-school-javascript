import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../images/smile_off.png";
import logo1 from "../../images/logo.png";
import './navbar.css';
import { Link } from 'react-router-dom';


const MainNavbar = () => {
    return (
        <Navbar expand="lg" variant="dark" className="py-3 bg-transparent">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="Logo" height={30} className="me-2" />
                    <img src={logo1} alt="Logo" height={30} />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-nav" />

                <Navbar.Collapse id="navbar-nav" className="justify-content-end">
                    <Nav className="fw-bold txt-size ">
                        <Nav.Link
                            href="/Courses"
                            className="text-white mx-3 txt-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            COURSES
                        </Nav.Link>
                        <Nav.Link
                            href="/Pricing"
                            className="text-white mx-3 txt-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            PRICING
                        </Nav.Link>
                        <Nav.Link className="text-white mx-3 txt-link">LOGIN</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MainNavbar;
