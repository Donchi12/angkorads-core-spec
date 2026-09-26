import { describe, expect, it, vi } from "vitest";
import { ListingService } from "./listing-service";

describe("ListingService", () => {
  it("normalizes filters before querying the repository", async () => {
    const search = vi.fn().mockResolvedValue([]);
    const service = new ListingService({ search });

    await service.search({
      category: " vehicles ",
      minPrice: 900,
      maxPrice: 100,
    });

    expect(search).toHaveBeenCalledWith(
      expect.objectContaining({
        category: "vehicles",
        minPrice: 100,
        maxPrice: 900,
      })
    );
  });
});
