-- CreateTable
CREATE TABLE "public"."ListingImageCache" (
    "listingId" TEXT NOT NULL,
    "source" TEXT,
    "url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ListingImageCache_pkey" PRIMARY KEY ("listingId")
);
