"use server";

import prisma from "@/lib/db";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  await prisma.post.create({
    data: {
      title: formData.get("title") as string,
      slug: (formData.get("title") as string).replace(/\s/g, "-").toLowerCase(),
      content: formData.get("content") as string,
    },
  });
}

export async function createUser(formData: FormData) {
  try {
    const user = await prisma.user.create({
      data: {
        username: formData.get("username") as string,
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      },
    });
  } catch (error) {
    throw error;
  }
}

export async function getUser(formData: FormData) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: formData.get("username") as string,
        password: formData.get("password") as string,
        email: formData.get("email") as string,
      },
    });
    if (user) {
      console.log(user);
      redirect("/posts");
    }
  } catch (error) {
    throw error;
  }
}
