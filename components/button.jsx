import Link from "next/link";

export function OutlineButton({ href, onClick, children, type = "button", style = {} }) {
  if (href) {
    return (
      <Link href={href} className="btn-outline" style={style}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className="btn-outline" style={style}>
      {children}
    </button>
  );
}
