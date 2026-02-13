import { Container, Button, Row, Col, Card } from "react-bootstrap";
import phillip from "../../images/profile_1.jpg";
import nannie from "../../images/profile_2.jpg";
import bruce from "../../images/profile_3.jpg";
import henry from "../../images/profile_4.jpg";
import "./header.css";

const Header = () => {
    return (
        <>
            <Container className="text-center py-5">
                <h1 className="get-schooled">Get schooled</h1>
                <ul className="list-inline mb-3">
                    <li className="list-inline-item mx-2 mx-md-5">SMILE</li>
                    <li className="list-inline-item mx-2 mx-md-5">GRIN</li>
                    <li className="list-inline-item mx-2 mx-md-5">LAUGH</li>
                </ul>
                <div className=" mt-5">
                    <Button className="btn-purple px-4 py-2 ">
                        REGISTER FOR FREE
                    </Button>
                </div>
            </Container>

            <Container className="text-center py-5">
                <h4>
                    <span className="txt-learn fw-bold">Learn</span> from the pros
                </h4>
            </Container>

            <Container className="py-5">
                <Row className="g-4 justify-content-center">
                    <Col md={3}>
                        <Card  text="white" className="text-center border-0 bg-transparent">
                            <Card.Img variant="top" src={phillip} className="student-img" />
                            <Card.Body >
                                <Card.Title>Phillip Massey</Card.Title>
                                <Card.Text className="fst-italic"> «Smile of the year» <br />2018-2019</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={3}>
                        <Card bg="dark" text="white" className="text-center border-0 bg-transparent">
                            <Card.Img variant="top" src={nannie} className="student-img" />
                            <Card.Body>
                                <Card.Title>Nannie Lawrence</Card.Title>
                                <Card.Text className="fst-italic" >Best «little smile»<br />2017</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={3}>
                        <Card bg="dark" text="white" className="text-center border-0 bg-transparent">
                            <Card.Img variant="top" src={bruce} className="student-img" />
                            <Card.Body >
                                <Card.Title>Bruce Wayne</Card.Title>
                                <Card.Text className="fst-italic">Best «Friend Smile»<br />live performance 2019</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={3}>
                        <Card bg="dark" text="white" className="text-center border-0 bg-transparent">
                            <Card.Img variant="top" src={henry} className="student-img " />
                            <Card.Body >
                                <Card.Title>Henry Hughes</Card.Title>
                                <Card.Text className="fst-italic">«24h smiles» winner <br />2016-2019</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Header;
