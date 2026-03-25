export default function SectionHeading({ children, style = {} }) {
  return (
    <div className="section-heading-wrapper" style={{ margin: "0 auto", ...style }}>
      <hr />
      <span className="script-heading" style={{ whiteSpace: "nowrap" }}>
        {children}
      </span>
      <hr />
    </div>
  );
}
