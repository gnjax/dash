-- CreateTable
CREATE TABLE "public"."ScrapedPackage" (
    "id" TEXT NOT NULL,
    "source" TEXT NOT NULL DEFAULT 'buyee',
    "pageUrl" TEXT NOT NULL,
    "dateShipped" TIMESTAMP(3),
    "packageNumber" TEXT NOT NULL,
    "intlTrackingNumber" TEXT,
    "intlTrackingUrl" TEXT,
    "internationalShippingFeeYen" DECIMAL(12,2),
    "domesticShippingFeeYen" DECIMAL(12,2),
    "raw" JSONB,
    "firstSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ScrapedPackage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ScrapedItem" (
    "id" TEXT NOT NULL,
    "scrapedPackageId" TEXT NOT NULL,
    "orderNumber" TEXT,
    "titleJa" TEXT,
    "titleEn" TEXT,
    "itemUrl" TEXT,
    "listingId" TEXT,
    "priceYen" DECIMAL(12,2),

    CONSTRAINT "ScrapedItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ScrapedPackage_packageNumber_key" ON "public"."ScrapedPackage"("packageNumber");

-- CreateIndex
CREATE INDEX "ScrapedPackage_dateShipped_idx" ON "public"."ScrapedPackage"("dateShipped");

-- CreateIndex
CREATE INDEX "ScrapedPackage_intlTrackingNumber_idx" ON "public"."ScrapedPackage"("intlTrackingNumber");

-- CreateIndex
CREATE INDEX "ScrapedItem_scrapedPackageId_idx" ON "public"."ScrapedItem"("scrapedPackageId");

-- CreateIndex
CREATE INDEX "ScrapedItem_listingId_idx" ON "public"."ScrapedItem"("listingId");

-- AddForeignKey
ALTER TABLE "public"."ScrapedItem" ADD CONSTRAINT "ScrapedItem_scrapedPackageId_fkey" FOREIGN KEY ("scrapedPackageId") REFERENCES "public"."ScrapedPackage"("id") ON DELETE CASCADE ON UPDATE CASCADE;
