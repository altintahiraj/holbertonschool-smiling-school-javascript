import { Container, Row, Col, Button } from "react-bootstrap";
import logo from "../../images/smile_off.png";
import logoText from "../../images/logo.png";
import signal from "../../images/signal.png";
import play from "../../images/play.png";
import { CheckCircle } from "react-bootstrap-icons";
import "./pricing.css";

const Pricing = () => {
    return (
        <Container className="text-center py-5 mt-5">
            <img src={play}
                alt="play button"
                height={60}
                className="mb-5">
            </img>
            <h1 className="text-main">
                What is
                <span className="ms-3">
                    <img
                        src={logo}
                        alt="logo"
                        height={40}
                        className="me-3" />
                    <img
                        src={logoText}
                        alt="logo text"
                        height={40} />
                </span> ?
            </h1>
            <h2 className="fw-bold fs-1 mt-5 mb-5">Go pro!</h2>
            <Row className="justify-content-center mb-4 txt-plan">
                <Col xs={6} sm={4} >
                    <div className="plan">
                        <Button className="btn-purple mb-5">
                            BUY 3 MONTHS
                        </Button>
                        <h3 className="fw-bold">$89.99</h3>
                        <span className="txt-month">$29.99/month</span>
                    </div>
                </Col>

                <Col xs={6} sm={4}>
                    <div className="plan">
                        <Button className="btn-purple mb-5">
                            BUY 1 YEAR
                        </Button>
                        <h3 className="fw-bold">$269.99</h3>
                        <span className="txt-month">$24.99/month</span>
                    </div>
                </Col>
            </Row>

            <Row className="pricing-row">
                <Col sm={4} className="text-start">
                    Unlimited access to all tutorials
                </Col>
                <Col sm={4}><CheckCircle className="check-icon" /></Col>
                <Col sm={4}><CheckCircle className="check-icon" /></Col>
            </Row>

            <Row className="pricing-row">
                <Col sm={4} className="text-start">
                    Access SmileSchool private forum
                </Col>
                <Col sm={4}><CheckCircle className="check-icon" /></Col>
                <Col sm={4}><CheckCircle className="check-icon" /></Col>
            </Row>

            <Row className="pricing-row">
                <Col sm={4} className="text-start">
                    Access Smiles contests & analysis
                </Col>
                <Col sm={4}><CheckCircle className="check-icon" /></Col>
                <Col sm={4}><CheckCircle className="check-icon" /></Col>
            </Row>

            <Row className="pricing-row">
                <Col sm={4} className="text-start">
                    Get a free toothbrush
                </Col>
                <Col sm={4}></Col>
                <Col sm={4}><CheckCircle className="check-icon" /></Col>
            </Row>

            <Row className="pricing-row align-items-center signal-row">
                <Col sm={4} className="text-start">
                    <img src={signal} alt="Signal" height={40} />
                </Col>
                <Col sm={4}></Col>
                <Col sm={4}><CheckCircle className="check-icon" /></Col>
            </Row>

            <Row className="pricing-row">
                <Col sm={4} className="text-start">
                    Exclusive discount on Signal products
                </Col>
                <Col sm={4}></Col>
                <Col sm={4}></Col>
            </Row>
        </Container >
    );
};

export default Pricing;
