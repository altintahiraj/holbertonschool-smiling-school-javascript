import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import "./sortby.css";
import { Search } from 'react-bootstrap-icons';

const VideoFilter = ({
    keyword,
    onKeywordChange,
    topic,
    onTopicChange,
    sort,
    onSortChange,
    topics = [],
    sorts = [],
}) => {
    return (
        <section className="py-4 sort-by">
            <Container>
                <Row className="g-5 justify-content-center align-items-center">
                    <Col xs={12} sm={8} md={6} lg={4}>
                        <div className="filter-label">KEYWORDS</div>
                        <InputGroup>
                            <InputGroup.Text className=" filter-control bg-white border-end-0 filter-control">
                                <Search size={25} />
                            </InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Search by keywords"
                                className="border-start-0 filter-control"
                                size="lg"
                                value={keyword}
                                onChange={(e) => onKeywordChange?.(e.target.value)}
                            />
                        </InputGroup>
                    </Col>


                    {/*  dropdown 1 */}
                    <Col xs={12} sm={8} md={6} lg={4}>
                        <div className="filter-label">TOPIC</div>
                        <Form.Select
                            className="filter-control rounded"
                            size="lg"
                            value={topic}
                            onChange={(e) => onTopicChange?.(e.target.value)}
                        >
                            {(topics?.length ? topics : [{ value: "all", label: "All" }]).map((t) => (
                                <option key={t.value} value={t.value}>{t.label}</option>
                            ))}
                        </Form.Select>
                    </Col>

                    {/* dropdown 2 */}
                    <Col xs={12} sm={8} md={6} lg={4}>
                        <div className="filter-label">SORT BY</div>
                        <Form.Select
                            className="filter-control rounded"
                            size="lg"
                            value={sort}
                            onChange={(e) => onSortChange?.(e.target.value)}
                        >
                            {(sorts?.length ? sorts : []).map((s) => (
                                <option key={s.value} value={s.value}>{s.label}</option>
                            ))}
                        </Form.Select>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default VideoFilter;
