import MainNavbar from "../../components/NavBar/MainNavbar.jsx";
import CoursesP from "../../components/Courses/courses.jsx";
import Footer from "../../components/Footer/footer.jsx";
import VideoPart from "../../components/Courses/videos.jsx";
import VideoFilter from "../../components/Courses/sortby.jsx";
import { useEffect, useState } from "react";
import { endpoints, fetchJSON } from "../../api/smileschool.js";

function useDebouncedValue(value, delayMs = 350) {
    const [debounced, setDebounced] = useState(value);

    useEffect(() => {
        const t = setTimeout(() => setDebounced(value), delayMs);
        return () => clearTimeout(t);
    }, [value, delayMs]);

    return debounced;
}

const CoursesPage = () => {
    const [keyword, setKeyword] = useState("");
    const [topic, setTopic] = useState("all");
    const [sort, setSort] = useState("most_viewed");
    const [topics, setTopics] = useState([{ value: "all", label: "All" }]);
    const [sorts, setSorts] = useState([
        { value: "most_popular", label: "Most popular" },
        { value: "most_recent", label: "Most recent" },
        { value: "most_viewed", label: "Most viewed" },
    ]);
    const [loading, setLoading] = useState(true);
    const [courses, setCourses] = useState([]);

    // Debounce keyword changes (so typing doesn't spam the API)
    const debouncedKeyword = useDebouncedValue(keyword, 350);

    useEffect(() => {
        const ctrl = new AbortController();

        const params = new URLSearchParams();
        if (debouncedKeyword) params.set("q", debouncedKeyword);
        if (topic && topic !== "all") params.set("topic", topic);
        if (sort) params.set("sort", sort);

        setLoading(true);
        fetchJSON(`${endpoints.courses}?${params.toString()}`, { signal: ctrl.signal })
            .then((data) => {
                const list = data?.courses || data?.data || data || [];
                setCourses(Array.isArray(list) ? list : []);

                // Populate topics if the API provides them
                const apiTopics = data?.topics;
                if (Array.isArray(apiTopics) && apiTopics.length > 0) {
                    setTopics([
                        { value: "all", label: "All" },
                        ...apiTopics.map((t) => ({
                            value: t?.value ?? t,
                            label: t?.label ?? t,
                        })),
                    ]);
                }

                // Populate sorts if the API provides them
                const apiSorts = data?.sorts;
                if (Array.isArray(apiSorts) && apiSorts.length > 0) {
                    setSorts(
                        apiSorts.map((s) => ({
                            value: s?.value ?? s,
                            label: s?.label ?? s,
                        }))
                    );
                }
            })
            .catch(() => setCourses([]))
            .finally(() => setLoading(false));

        return () => ctrl.abort();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedKeyword, topic, sort]);

    return (
        <>
            <div className="bg-course text-white">
                <MainNavbar />
                <CoursesP />
            </div>
            <VideoFilter
                keyword={keyword}
                onKeywordChange={setKeyword}
                topic={topic}
                onTopicChange={setTopic}
                sort={sort}
                onSortChange={setSort}
                topics={topics}
                sorts={sorts}
            />
            <VideoPart loading={loading} courses={courses} />
            <Footer />
        </>
    );
};

export default CoursesPage;
