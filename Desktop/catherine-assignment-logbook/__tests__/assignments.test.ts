import { GET, POST } from "@/app/api/assignments/route";
import { resetAssignments } from "@/lib/assignments";

describe("Assignment API", () => {
  beforeEach(() => {
    resetAssignments();
  });

  it("GET empty assignments", async () => {
    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual([]);
  });

  it("POST success", async () => {
    const mockRequest = {
      json: async () => ({
        title: "Math Homework",
        subject: "Math",
        dueDate: "2026-03-10",
        status: "pending",
      }),
    } as Request;

    const response = await POST(mockRequest);
    const data = await response.json();

    expect(response.status).toBe(201);
    expect(data.title).toBe("Math Homework");
  });

  it("POST error (missing field)", async () => {
    const mockRequest = {
      json: async () => ({
        title: "Incomplete",
      }),
    } as Request;

    const response = await POST(mockRequest);

    expect(response.status).toBe(400);
  });
});