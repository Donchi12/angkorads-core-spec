import type { ListingFilters } from "./filters";
import { normalizeFilters } from "./filters";

export type ListingSummary = {
  id: string;
  title: string;
  price: number;
  location: string;
  publishedAt: string;
};

export interface ListingRepository {
  search(filters: ListingFilters): Promise<ListingSummary[]>;
}

export class ListingService {
  constructor(private readonly repository: ListingRepository) {}

  async search(filters: ListingFilters) {
    const normalized = normalizeFilters(filters);
    return this.repository.search(normalized);
  }
}
