import { NextResponse } from "next/server";
import {
  getAssignmentById,
  updateAssignment,
  deleteAssignment,
} from "@/lib/assignments";

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const assignment = getAssignmentById(id);

  if (!assignment) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  return NextResponse.json(assignment);
}

export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const body = await request.json();

  const updated = updateAssignment(id, body);

  if (!updated) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  return NextResponse.json(updated);
}

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const deleted = deleteAssignment(id);

  if (!deleted) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Deleted successfully" });
}