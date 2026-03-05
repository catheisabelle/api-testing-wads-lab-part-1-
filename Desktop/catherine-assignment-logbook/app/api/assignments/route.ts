import { NextResponse } from "next/server";
import { getAssignments, createAssignment } from "@/lib/assignments";

export async function GET() {
  return NextResponse.json(getAssignments(), { status: 200 });
}

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.title || !body.subject || !body.dueDate || !body.status) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  const newAssignment = createAssignment(body);
  return NextResponse.json(newAssignment, { status: 201 });
}