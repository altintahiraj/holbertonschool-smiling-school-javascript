import "./spinner.css";

/**
 * Centered spinner for whole sections.
 *
 * Props:
 * - height: CSS height (default: 260px)
 */
/**
 * Spinner that matches the Holberton SmileSchool reference (grey ring with purple arc).
 *
 * Props:
 * - height: min-height for the section container
 * - variant: "default" | "onPurple"  (changes colors for dark/purple backgrounds)
 * - size: spinner size in px
 */
export default function SectionSpinner({
  height = "260px",
  variant = "default",
  size = 64,
}) {
  return (
    <div className="section-spinner" style={{ minHeight: height }}>
      <div
        className={`ss-spinner ${variant === "onPurple" ? "ss-on-purple" : ""}`}
        style={{ width: size, height: size }}
        aria-label="Loading"
        role="status"
      />
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}
