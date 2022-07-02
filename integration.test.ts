import { PrismaClient } from "./src/generated/client";
import { describe, expect, it } from "vitest";

describe("Prisma test", () => {
  it("works", () => {
    const prisma = new PrismaClient();
    prisma.$connect();
  });
});
