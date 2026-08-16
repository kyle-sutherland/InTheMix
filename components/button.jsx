import Link from "next/link";

/**
 * Outlined amber button (default).
 * variants: "outline" (default), "light" (on dark bg), "filled" (dark fill).
 */
export function Button({ href, children, variant = "outline", style = {}, ...rest }) {
  const cls = "btn" + (variant === "light" ? " btn-light" : variant === "filled" ? " btn-filled" : "");
  if (!href) {
    return <button className={cls} style={style} {...rest}>{children}</button>;
  }
  if (href.startsWith("/")) {
    return <Link href={href} className={cls} style={style} {...rest}>{children}</Link>;
  }
  return <a href={href} className={cls} style={style} {...rest}>{children}</a>;
}

// Back-compat exports
export const OutlineButton = (props) => <Button {...props} />;
