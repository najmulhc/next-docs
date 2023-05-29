import Link from "next/link";

const Nav = () => {
  return <nav>
    <ul className="flex gap-4 w-full">
        <li className="flex ">
            <Link href="/little-lemon">Home</Link>
        </li>
        <li className="flex ">
            <Link href="/little-lemon/menu">Menu</Link>
        </li>
        <li className="flex ">
            <Link href="/little-lemon/offer">Offer</Link>
        </li>
        <li className="flex ">
            <Link href="/little-lemon/about-us">About us</Link>
        </li>
    </ul>
  </nav>;
};

export default Nav;
