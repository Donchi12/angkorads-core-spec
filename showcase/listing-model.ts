export type ListingStatus = "active" | "sold" | "expired";

export interface ListingImage {
  id: string;
  storagePath: string;
  isPrimary?: boolean;
}

export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  category: string;
  status: ListingStatus;
  images: ListingImage[];
  isBoosted: boolean;
  createdAt: string;
}

export const primaryImage = (listing: Listing): string | undefined =>
  listing.images.find((image) => image.isPrimary)?.storagePath ??
  listing.images[0]?.storagePath;
