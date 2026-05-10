import Link from "next/link";

/**
 * Outlined amber button (default).
 * variants: "outline" (default), "light" (on dark bg), "filled" (dark fill).
 */
export function Button({ href, children, variant = "outline", style = {}, ...rest }) {
  const cls = "btn" + (variant === "light" ? " btn-light" : variant === "filled" ? " btn-filled" : "");
  if (href && href.startsWith("/")) {
    return <Link href={href} className={cls} style={style} {...rest}>{children}</Link>;
  }
  return <a href={href || "#"} className={cls} style={style} {...rest}>{children}</a>;
}

// Back-compat exports
export const OutlineButton = ({ href, children, variant }) => (
  <Button href={href} variant={variant}>{children}</Button>
);
