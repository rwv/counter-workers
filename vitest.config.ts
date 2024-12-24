import { defineWorkersConfig } from "@cloudflare/vitest-pool-workers/config";

export default defineWorkersConfig({
  test: {
    poolOptions: {
      workers: {
        wrangler: { configPath: "./wrangler.toml" },
      },
    },
    coverage: {
      provider: "istanbul",
      reporter: ["text", "json-summary", "json", "html", "clover"],
      include: ["src"],
    },
  },
});
