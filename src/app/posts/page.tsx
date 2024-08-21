import Link from "next/link";
import prisma from "@/lib/db";
import PostForm from "@/components/PostForm";

export default async function PostsPage() {
  const posts = await prisma.post.findMany();

  return (
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
      <h1 className="text-3xl font-semibold">All Posts</h1>
      <ul className="border-t border-b border-black/10 py-5 leading-8">
        {posts.map((post) => (
          <li className="flex items-center justify-center" key={post.id}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <div className="flex">
        <PostForm />
      </div>
    </main>
  );
}
