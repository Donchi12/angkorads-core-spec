export type ListingFilters = {
  category?: string;
  subcategory?: string;
  minPrice?: number;
  maxPrice?: number;
  location?: string;
  condition?: "new" | "used";
  sort?: "recent" | "price_asc" | "price_desc";
};

export function normalizeFilters(input: ListingFilters): ListingFilters {
  const minPrice = input.minPrice != null && input.minPrice >= 0 ? input.minPrice : undefined;
  const maxPrice = input.maxPrice != null && input.maxPrice >= 0 ? input.maxPrice : undefined;

  return {
    ...input,
    category: input.category?.trim() || undefined,
    subcategory: input.subcategory?.trim() || undefined,
    location: input.location?.trim() || undefined,
    minPrice: minPrice != null && maxPrice != null && minPrice > maxPrice ? maxPrice : minPrice,
    maxPrice: minPrice != null && maxPrice != null && minPrice > maxPrice ? minPrice : maxPrice,
  };
}
