"use client";
import { getUser } from "@/actions/action";
import Link from "next/link";
import { toast } from "sonner";

export default function LoginForm() {
  return (
    <main>
      <div className="flex">
        <form action={getUser} className="flex flex-col gap-y-2 w-[300px]">
          <input
            type="input"
            name="email"
            placeholder="Email"
            className="px-2 py-1 rounded-lg border border-black/20 text-black font-light"
          />
          <input
            type="input"
            name="username"
            placeholder="User Name"
            className="px-2 py-1 rounded-lg border border-black/20 text-black font-light"
          />
          <input
            type="input"
            name="password"
            placeholder="Password"
            className="px-2 py-1 rounded-lg border border-black/20 text-black font-light"
          />

          <button
            type="submit"
            className="bg-purple-600 py-2 text-white rounded-lg"
            onClick={() => toast("User Logged In.")}
          >
            Login
          </button>
        </form>
      </div>
      <div className="w-full items-center relative left-[20%]">
        <Link href={`/signup`}>
          <button
            type="button"
            className="bg-blue-400 py-2 text-white rounded-lg mt-5 p-4 hover:bg-purple-600"
          >
            No Account Yet?
          </button>
        </Link>
      </div>
    </main>
  );
}
