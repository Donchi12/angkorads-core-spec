export type SearchQuery = {
  text: string;
  page: number;
  pageSize: number;
  filters: Record<string, string | number>;
};

export function buildSearchQuery(input: {
  text?: string;
  page?: number;
  pageSize?: number;
  filters?: Record<string, string | number | undefined>;
}): SearchQuery {
  const filters = Object.fromEntries(
    Object.entries(input.filters ?? {}).filter(([, value]) => value !== undefined && value !== "")
  ) as Record<string, string | number>;

  return {
    text: input.text?.trim() ?? "",
    page: Math.max(1, input.page ?? 1),
    pageSize: Math.min(50, Math.max(10, input.pageSize ?? 20)),
    filters,
  };
}
