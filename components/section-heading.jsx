import React from "react";

/**
 * Section heading with flanking hairlines and Allura script label.
 * <SectionHeading>What we do</SectionHeading>
 */
export default function SectionHeading({ children, maxWidth = "560px", style = {} }) {
  return (
    <div className="section-heading" style={{ maxWidth, ...style }}>
      <hr />
      <span className="label">{children}</span>
      <hr />
    </div>
  );
}
