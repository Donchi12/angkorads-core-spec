import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import type { Listing } from "./listing-model";

interface ListingCardProps {
  listing: Listing;
  href?: string;
}

export function ListingCard({ listing, href = `/listings/${listing.id}` }: ListingCardProps) {
  const image = listing.images[0]?.storagePath;

  return (
    <article className="overflow-hidden rounded-xl border bg-card">
      <Link href={href} className="block">
        <div className="relative aspect-[16/10] bg-muted">
          {image && (
            <Image
              src={image}
              alt={listing.title}
              fill
              className="object-cover transition-transform hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          )}
        </div>
        <div className="space-y-2 p-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-semibold">{listing.title}</h3>
            {listing.isBoosted && (
              <span className="rounded-md px-2 py-1 text-xs font-medium">
                Featured
              </span>
            )}
          </div>
          <p className="text-lg font-bold">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(listing.price)}
          </p>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {listing.location}
          </p>
        </div>
      </Link>
    </article>
  );
}
