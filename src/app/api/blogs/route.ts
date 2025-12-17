import { Blog } from "@/app/types/blog";
import { NextResponse } from "next/server";

export async function GET() {
  const blogs: Blog[] = [
    { id: 1, title: "Learn Next.js App Router" },
    { id: 2, title: "Why Next.js is Fast" },
  ];

  return NextResponse.json(blogs);
}
