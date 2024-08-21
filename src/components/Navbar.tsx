import Link from "next/link";

export default function Navbar() {
  const navLink = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Posts", path: "/posts" },
    { id: 3, title: "Login", path: "/login" },
    { id: 4, title: "Signup", path: "/signup" },
  ];

  return (
    <main className="flex items-center justify-evenly p-4 m-2">
      {navLink.map((items) => (
        <Link href={items.path} key={items.id}>
          <h2>{items.title}</h2>
        </Link>
      ))}
    </main>
  );
}
