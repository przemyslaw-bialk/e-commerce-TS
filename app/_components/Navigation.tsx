import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
        <Link href="/items">products</Link>
      </li>
    </ul>
  );
}
