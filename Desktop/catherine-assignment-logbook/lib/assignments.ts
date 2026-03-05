import { v4 as uuidv4 } from "uuid";

export interface Assignment {
  description: any;
  id: string;
  title: string;
  subject: string;
  dueDate: string;
  status: "pending" | "completed";
}

let assignments: Assignment[] = [];

export function getAssignments() {
  return assignments;
}

export function getAssignmentById(id: string) {
  return assignments.find(a => a.id === id);
}

export function createAssignment(data: Omit<Assignment, "id">) {
  const newAssignment: Assignment = {
    id: uuidv4(),
    ...data,
  };
  assignments.push(newAssignment);
  return newAssignment;
}

export function updateAssignment(id: string, data: Partial<Assignment>) {
  const index = assignments.findIndex(a => a.id === id);
  if (index === -1) return null;

  assignments[index] = { ...assignments[index], ...data };
  return assignments[index];
}

export function deleteAssignment(id: string) {
  const index = assignments.findIndex(a => a.id === id);
  if (index === -1) return false;

  assignments.splice(index, 1);
  return true;
}

export function resetAssignments() {
  assignments = [];
}