"use client";

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const spec = {
  openapi: "3.0.0",
  info: {
    title: "Catherine Assignment Log Book API",
    version: "1.0.0",
  },

  paths: {
    "/api/assignments": {
      get: {
        summary: "Get all assignments",
        responses: {
          200: {
            description: "List of assignments",
            content: {
              "application/json": {
                example: [
                  {
                    id: "1",
                    title: "Math Homework",
                    description: "Complete chapter 5 exercises",
                    dueDate: "2026-03-10",
                  },
                  {
                    id: "2",
                    title: "Biology Report",
                    description: "Write report on plant cells",
                    dueDate: "2026-03-12",
                  },
                ],
              },
            },
          },
        },
      },

      post: {
        summary: "Create new assignment",

        requestBody: {
          required: true,
          content: {
            "application/json": {
              example: {
                title: "Physics Assignment",
                description: "Newton's Laws worksheet",
                dueDate: "2026-03-15",
              },
            },
          },
        },

        responses: {
          201: {
            description: "Assignment created",
            content: {
              "application/json": {
                example: {
                  id: "3",
                  title: "Physics Assignment",
                  description: "Newton's Laws worksheet",
                  dueDate: "2026-03-15",
                },
              },
            },
          },

          400: {
            description: "Validation Error",
            content: {
              "application/json": {
                example: {
                  error: "Title is required",
                },
              },
            },
          },
        },
      },
    },

    "/api/assignments/{id}": {
      get: {
        summary: "Get assignment by ID",

        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "string" },
          },
        ],

        responses: {
          200: {
            description: "Assignment found",
            content: {
              "application/json": {
                example: {
                  id: "1",
                  title: "Math Homework",
                  description: "Complete chapter 5 exercises",
                  dueDate: "2026-03-10",
                },
              },
            },
          },

          404: {
            description: "Assignment not found",
            content: {
              "application/json": {
                example: {
                  error: "Assignment not found",
                },
              },
            },
          },
        },
      },

      put: {
        summary: "Update assignment",

        requestBody: {
          content: {
            "application/json": {
              example: {
                title: "Updated Math Homework",
                description: "Chapter 5 + Chapter 6",
                dueDate: "2026-03-11",
              },
            },
          },
        },

        responses: {
          200: {
            description: "Assignment updated",
            content: {
              "application/json": {
                example: {
                  id: "1",
                  title: "Updated Math Homework",
                  description: "Chapter 5 + Chapter 6",
                  dueDate: "2026-03-11",
                },
              },
            },
          },

          404: {
            description: "Assignment not found",
            content: {
              "application/json": {
                example: {
                  error: "Assignment not found",
                },
              },
            },
          },
        },
      },

      delete: {
        summary: "Delete assignment",

        responses: {
          200: {
            description: "Assignment deleted",
            content: {
              "application/json": {
                example: {
                  message: "Assignment deleted successfully",
                },
              },
            },
          },

          404: {
            description: "Assignment not found",
            content: {
              "application/json": {
                example: {
                  error: "Assignment not found",
                },
              },
            },
          },
        },
      },
    },
  },
};

export default function ApiDoc() {
  return <SwaggerUI spec={spec} />;
}