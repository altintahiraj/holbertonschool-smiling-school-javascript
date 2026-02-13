import { Container, Row, Col, Card, Image } from "react-bootstrap";
import play from "../../images/play.png";
import starColor from "../../images/star_on.png";
import starGray from "../../images/star_off.png";
import SectionSpinner from "../Loading/SectionSpinner.jsx";


const renderStars = (count) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
        let starImage;
        // filled or empty
        if (i < count) {
            // filled star 
            starImage = starColor;
        } else {
            //  empty star
            starImage = starGray;
        }
        // Add the star image
        stars.push(
            <Image
                src={starImage}
                width={20}
                height={20}
                className="me-2"
            />
        );
    }
    return stars;
};

const VideoPart = ({ loading = false, courses = [] }) => {

    return (
        <section className="py-5 position-relative">
            <Container className="py-4">
                <h5 className="mb-5 text-muted">{(courses?.length || 0)} videos</h5>

                {loading && <SectionSpinner height="240px" />}

                {!loading && (!courses || courses.length === 0) && (
                    <div className="text-center py-5 text-muted">No results found.</div>
                )}

                {!loading && courses && courses.length > 0 && (
                <div className="d-flex align-items-center position-relative">
                    <Row className="g-4" >
                        {courses.map((tutorial) => (
                            <Col xs={12} sm={6} lg={3} >
                                <Card className="bg-white shadow-sm">
                                    <div className="position-relative overflow-hidden rounded-top">
                                        <Image
                                            src={play}
                                            alt="Play"
                                            width={50}
                                            height={50}
                                            className="position-absolute top-50 start-50 translate-middle"
                                        />
                                        <Image
                                            src={tutorial.thumb_url}
                                            alt={tutorial.title}
                                            className="w-100 h-100" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="fw-bold">{tutorial.title}</Card.Title>
                                        <Card.Text className="text-muted">{tutorial.subtitle}</Card.Text>
                                        <div className="d-flex align-items-center gap-2 mb-3">
                                            <Image
                                                src={tutorial.author_pic_url}
                                                roundedCircle
                                                width={30}
                                                height={30} />
                                            <span className="fw-bold text-purple">{tutorial.author}</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>{renderStars(tutorial.star)}</div>
                                            <span className="text-purple fw-bold">{tutorial.duration}</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
                )}
            </Container>
        </section>

    );
};

export default VideoPart;