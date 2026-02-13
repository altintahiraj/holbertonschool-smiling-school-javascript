import { Container, Row, Col } from "react-bootstrap";
import { Facebook, TwitterX, Instagram } from "react-bootstrap-icons";
import logo from "../../images/smile_off.png";
import smile from "../../images/logo.png";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer text-white py-5">
            <Container>
                <Row className="align-items-center py-5">
                    {/* Logo */}
                    <Col md={6}>
                        <img
                            src={logo}
                            alt="Smile Logo"
                            height={30}
                            className="me-3"
                        />
                        <img
                            src={smile}
                            alt="Smile Logo"
                            height={30}

                        />
                    </Col>

                    {/* Social icons */}
                    <Col md={6} className="text-md-end">
                        <a href="https://www.facebook.com/" className="footer-icon">
                            <Facebook size={20} />
                        </a>
                        <a href="https://x.com/" className="footer-icon">
                            <TwitterX size={20} />
                        </a>
                        <a href="https://www.instagram.com/" className="footer-icon">
                            <Instagram size={20} />
                        </a>
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col className=" text-center text-footer ">
                        <small>@smileschool 2020</small>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
