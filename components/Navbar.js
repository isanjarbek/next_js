import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/public/nextjs.png" width={100} height={100} />
      </div>
      <Link href="/about">About</Link>
      <Link href="/users">Users</Link>
      <Link href="/users/user">User</Link>
    </nav>
  );
};

export default Navbar;
