import React, { useEffect, useMemo, useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import arrowLeft from "../../images/arrow_white_left.png";
import arrowRight from "../../images/arrow_white_right.png";
import "bootstrap/dist/css/bootstrap.min.css";
import './testimonial.css';
import SectionSpinner from "../Loading/SectionSpinner.jsx";
import { endpoints, fetchJSON } from "../../api/smileschool.js";

const Testimonial = () => {
    const [number, setNumber] = useState(0);
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const ctrl = new AbortController();
        setLoading(true);
        fetchJSON(endpoints.quotes, { signal: ctrl.signal })
            .then((data) => {
                const list = Array.isArray(data) ? data : (data?.quotes || data?.data || []);
                setItems(list);
                setNumber(0);
            })
            .catch(() => {
                // If API fails, keep UI stable with empty list.
                setItems([]);
            })
            .finally(() => setLoading(false));

        return () => ctrl.abort();
    }, []);

    const nextTestimonial = () => {
        if (number < (items?.length || 0) - 1) {
            setNumber(number + 1);
        }
    };

    const prevTestimonial = () => {
        if (number > 0) {
            setNumber(number - 1);
        }
    };

    const current = useMemo(() => items[number], [items, number]);

    return (
        <section className="bg-color text-white py-5 ">
            <Container className="position-relative">
                {loading && <SectionSpinner height="220px" variant="onPurple" />}
                {!loading && (!items || items.length === 0) && (
                    <div className="py-5 text-center">No quotes available.</div>
                )}

                {!loading && items && items.length > 0 && (
                    <>
                        {/* Left Arrow */}
                        <Button
                            variant="link"
                            onClick={prevTestimonial}
                            className="position-absolute top-50"
                        >
                            <Image src={arrowLeft} alt="Previous" width={30} />
                        </Button>

                        <Row className="align-items-center justify-content-center g-5 py-4">
                            <Col md="auto">
                                <Image
                                    src={current?.pic_url}
                                    alt={current?.name}
                                    roundedCircle
                                    className="testimonial-img"
                                />
                            </Col>
                            <Col md={7}>
                                <blockquote className="fs-5 fw-light">{current?.text}</blockquote>
                                <p className="fw-bold mt-3 mb-1">{current?.name}</p>
                                <p className="fst-italic">{current?.title}</p>
                            </Col>
                        </Row>

                        {/* Right Arrow */}
                        <Button
                            variant="link"
                            onClick={nextTestimonial}
                            className="position-absolute end-0 top-50"
                        >
                            <Image src={arrowRight} alt="Next" width={30} />
                        </Button>
                    </>
                )}
            </Container>
        </section>
    );
};

export default Testimonial;
