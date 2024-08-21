import { createPost } from "@/actions/action";

export default function PostForm() {
  return (
    <form action={createPost} className="flex flex-col gap-y-2 w-[300px]">
      <input
        type="input"
        name="title"
        placeholder="Title"
        className="px-2 py-1 rounded-lg text-black font-semibold"
      />
      <textarea
        name="content"
        rows={5}
        placeholder="Content"
        className="px-2 py-1 rounded-lg text-black"
      />
      <button
        type="submit"
        className="bg-purple-600 py-2 text-white rounded-lg"
      >
        Add Post
      </button>
    </form>
  );
}
