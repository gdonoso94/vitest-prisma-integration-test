import { PrismaClient } from "./src/generated/client";
import { describe, it } from "vitest";

describe("Prisma test", () => {
  it("works", () => {
    const prisma = new PrismaClient();
    prisma.$connect();
  });

  // TODO: Add testcontainers and run test against container instance
});
