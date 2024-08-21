import prisma from "@/lib/db";

export default async function PostPage(props) {
  const slug = props.params;
  const post = await prisma.post.findUnique({
    where: {
      slug: slug.slug,
    },
  });

  console.log(slug);
  return (
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
      <h1 className="text-3xl font-semibold">{post?.title}</h1>
      <p>{post?.content}</p>
    </main>
  );
}
