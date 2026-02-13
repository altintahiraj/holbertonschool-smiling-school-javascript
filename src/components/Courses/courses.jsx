import { Container } from "react-bootstrap";
import "./courses.css";
import "../../index.css";

const CoursesP = () => {
    return (
        <>
        <Container className="text-center py-5">
                <h1 className="quote-course">
                    « Don't cry because it's over .<br />
                    <span> Smile</span> because it happened. »
                </h1>
                <h6 className="quote-author">Dr. Seuss</h6>
            </Container>
        </>
    );
};

export default CoursesP;
