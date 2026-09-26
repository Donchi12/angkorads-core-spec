export interface ListingSearch {
  query?: string;
  category?: string;
  location?: string;
  minPrice?: number;
  maxPrice?: number;
}

export function buildListingFilters(search: ListingSearch): Record<string, unknown> {
  const filters: Record<string, unknown> = {};

  if (search.category) filters.category = search.category;
  if (search.location) filters.location = search.location;
  if (search.minPrice !== undefined) filters.minPrice = Math.max(0, search.minPrice);
  if (search.maxPrice !== undefined) filters.maxPrice = Math.max(0, search.maxPrice);
  if (search.query?.trim()) filters.query = search.query.trim();

  return filters;
}
