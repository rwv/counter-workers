import { describe, it, expect } from "vitest";
import app from "./index";

describe("index", () => {
  it("should return a response", async () => {
    const response = await app.fetch();
    expect(response.status).toBe(200);
  });
});
