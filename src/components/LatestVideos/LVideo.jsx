import { Container, Row, Col, Card, Image } from "react-bootstrap";
import play from "../../images/play.png";
import starColor from "../../images/star_on.png";
import starGray from "../../images/star_off.png";
import './LVideo.css';
import { useEffect, useState } from "react";
import SectionSpinner from "../Loading/SectionSpinner.jsx";
import { endpoints, fetchJSON } from "../../api/smileschool.js";


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
        // Add the star image the array
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

const LatestVideos = () => {
    const [loading, setLoading] = useState(true);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const ctrl = new AbortController();
        setLoading(true);
        fetchJSON(endpoints.latestVideos, { signal: ctrl.signal })
            .then((data) => {
                const list = Array.isArray(data) ? data : (data?.videos || data?.data || []);
                setVideos(list);
            })
            .catch(() => setVideos([]))
            .finally(() => setLoading(false));

        return () => ctrl.abort();
    }, []);

    return (
        <section className="py-5 position-relative">
            <Container>
                <h1 className="text-center fs-2 py-5 mb-5 fw-light">
                    <span className="fw-bold txt-learn">Latest</span> videos
                </h1>

                {loading && <SectionSpinner height="180px" />}

                {!loading && videos.length === 0 && (
                    <div className="text-center py-5 text-muted">No videos available.</div>
                )}

                {!loading && videos.length > 0 && (
                <div className="d-flex align-items-center position-relative">
                    <Row className="g-4" >
                        {videos.map((v) => (
                            <Col key={v?.id ?? v?.title} xs={12} sm={6} lg={3} >
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
                                        src={v.thumb_url} 
                                        alt={v.title} 
                                        className="w-100" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="fw-bold">{v.title}</Card.Title>
                                        <Card.Text className="text-muted">{v.subtitle}</Card.Text>
                                        <div className="d-flex align-items-center gap-2 mb-3">
                                            <Image
                                                src={v.author_pic_url}
                                                roundedCircle
                                                width={30}
                                                height={30} />
                                            <span className="fw-bold text-purple">{v.author}</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>{renderStars(v.star)}</div>
                                            <span className="text-purple fw-bold">{v.duration}</span>
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

export default LatestVideos;