import Link from "next/link";

export function OutlineButton({ href, onClick, children, type = "button", style = {}, variant }) {
  const cls = variant === "light" ? "btn-outline-light" : "btn-outline";
  if (href) {
    return (
      <Link href={href} className={cls} style={style}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} style={style}>
      {children}
    </button>
  );
}
