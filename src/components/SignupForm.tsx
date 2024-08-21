"use client";
import { createUser } from "@/actions/action";
import Link from "next/link";
import { toast } from "sonner";

export default function SignupForm() {
  return (
    <main>
      <div className="flex">
        <form action={createUser} className="flex flex-col gap-y-2 w-[300px]">
          <input
            type="input"
            name="username"
            placeholder="Name"
            className="px-2 py-1 rounded-lg border border-black/20 text-black font-light"
          />
          <input
            type="input"
            name="password"
            placeholder="Password"
            className="px-2 py-1 rounded-lg border border-black/20 text-black font-light"
          />
          <input
            type="input"
            name="email"
            placeholder="Email"
            className="px-2 py-1 rounded-lg border border-black/20 text-black font-light"
          />
          <button
            type="submit"
            className="bg-purple-600 py-2 text-white rounded-lg"
            onClick={() => toast("User has been created.")}
          >
            Create Account
          </button>
        </form>
      </div>
      <div className="w-full items-center relative left-[20%]">
        <Link href={`/login`}>
          <button
            type="button"
            className="bg-blue-400 py-2 text-white rounded-lg mt-5 p-4 hover:bg-purple-600"
          >
            Looking To Login?
          </button>
        </Link>
      </div>
    </main>
  );
}
