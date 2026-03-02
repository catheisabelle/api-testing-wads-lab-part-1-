import { NextResponse } from "next/server";
import { users } from "@/lib/dummyData";

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const body = await req.json();

  const newUser = {
    id: users.length + 1,
    ...body,
  };

  users.push(newUser);

  return NextResponse.json(newUser, { status: 201 });
}