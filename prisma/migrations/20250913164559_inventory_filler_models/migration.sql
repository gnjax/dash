/*
  Warnings:

  - You are about to drop the `Item` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ItemTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Package` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SubPackage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TagClosure` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TagRelation` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."InventoryOriginType" AS ENUM ('Scraped', 'Manual');

-- CreateEnum
CREATE TYPE "public"."FillSourceType" AS ENUM ('ScrapedPackage', 'Manual');

-- DropForeignKey
ALTER TABLE "public"."Item" DROP CONSTRAINT "Item_packageId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Item" DROP CONSTRAINT "Item_subPackageId_fkey";

-- DropForeignKey
ALTER TABLE "public"."ItemTag" DROP CONSTRAINT "ItemTag_itemId_fkey";

-- DropForeignKey
ALTER TABLE "public"."ItemTag" DROP CONSTRAINT "ItemTag_tagId_fkey";

-- DropForeignKey
ALTER TABLE "public"."SubPackage" DROP CONSTRAINT "SubPackage_packageId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TagClosure" DROP CONSTRAINT "TagClosure_ancestorId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TagClosure" DROP CONSTRAINT "TagClosure_descendantId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TagRelation" DROP CONSTRAINT "TagRelation_childId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TagRelation" DROP CONSTRAINT "TagRelation_parentId_fkey";

-- DropTable
DROP TABLE "public"."Item";

-- DropTable
DROP TABLE "public"."ItemTag";

-- DropTable
DROP TABLE "public"."Package";

-- DropTable
DROP TABLE "public"."SubPackage";

-- DropTable
DROP TABLE "public"."TagClosure";

-- DropTable
DROP TABLE "public"."TagRelation";

-- CreateTable
CREATE TABLE "public"."InventoryItem" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "originType" "public"."InventoryOriginType" NOT NULL,
    "scrapedItemId" TEXT,
    "manualLineId" TEXT,
    "fillEntryId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InventoryItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."InventoryItemTag" (
    "itemId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,

    CONSTRAINT "InventoryItemTag_pkey" PRIMARY KEY ("itemId","tagId")
);

-- CreateTable
CREATE TABLE "public"."ManualPurchase" (
    "id" TEXT NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'JPY',
    "intlShippingTotalYen" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "domesticShippingTotalYen" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "customsTotalYen" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "subtotalYen" DECIMAL(12,2),
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ManualPurchase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ManualLine" (
    "id" TEXT NOT NULL,
    "manualPurchaseId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "priceYen" DECIMAL(12,2) NOT NULL,

    CONSTRAINT "ManualLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."InventoryFillSession" (
    "id" TEXT NOT NULL,
    "sourceType" "public"."FillSourceType" NOT NULL,
    "scrapedPackageId" TEXT,
    "manualPurchaseId" TEXT,
    "customsTotalYen" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InventoryFillSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."InventoryFillSourceItem" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "scrapedItemId" TEXT,
    "manualLineId" TEXT,
    "shippingWeightPpm" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "InventoryFillSourceItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."InventoryFillEntry" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "sourceItemId" TEXT NOT NULL,
    "nameOverride" TEXT,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "priceWeightPpm" INTEGER NOT NULL DEFAULT 0,
    "shippingWeightPpm" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "InventoryFillEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."InventoryFillEntryTag" (
    "entryId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,

    CONSTRAINT "InventoryFillEntryTag_pkey" PRIMARY KEY ("entryId","tagId")
);

-- CreateIndex
CREATE INDEX "InventoryItem_scrapedItemId_idx" ON "public"."InventoryItem"("scrapedItemId");

-- CreateIndex
CREATE INDEX "InventoryItem_manualLineId_idx" ON "public"."InventoryItem"("manualLineId");

-- CreateIndex
CREATE INDEX "InventoryItem_fillEntryId_idx" ON "public"."InventoryItem"("fillEntryId");

-- CreateIndex
CREATE INDEX "InventoryItemTag_tagId_idx" ON "public"."InventoryItemTag"("tagId");

-- CreateIndex
CREATE INDEX "ManualLine_manualPurchaseId_idx" ON "public"."ManualLine"("manualPurchaseId");

-- CreateIndex
CREATE INDEX "InventoryFillSession_scrapedPackageId_idx" ON "public"."InventoryFillSession"("scrapedPackageId");

-- CreateIndex
CREATE INDEX "InventoryFillSession_manualPurchaseId_idx" ON "public"."InventoryFillSession"("manualPurchaseId");

-- CreateIndex
CREATE INDEX "InventoryFillSourceItem_sessionId_idx" ON "public"."InventoryFillSourceItem"("sessionId");

-- CreateIndex
CREATE INDEX "InventoryFillSourceItem_scrapedItemId_idx" ON "public"."InventoryFillSourceItem"("scrapedItemId");

-- CreateIndex
CREATE INDEX "InventoryFillSourceItem_manualLineId_idx" ON "public"."InventoryFillSourceItem"("manualLineId");

-- CreateIndex
CREATE INDEX "InventoryFillEntry_sessionId_idx" ON "public"."InventoryFillEntry"("sessionId");

-- CreateIndex
CREATE INDEX "InventoryFillEntry_sourceItemId_idx" ON "public"."InventoryFillEntry"("sourceItemId");

-- CreateIndex
CREATE INDEX "InventoryFillEntryTag_tagId_idx" ON "public"."InventoryFillEntryTag"("tagId");

-- AddForeignKey
ALTER TABLE "public"."InventoryItemTag" ADD CONSTRAINT "InventoryItemTag_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "public"."InventoryItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."InventoryItemTag" ADD CONSTRAINT "InventoryItemTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "public"."Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ManualLine" ADD CONSTRAINT "ManualLine_manualPurchaseId_fkey" FOREIGN KEY ("manualPurchaseId") REFERENCES "public"."ManualPurchase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."InventoryFillSourceItem" ADD CONSTRAINT "InventoryFillSourceItem_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "public"."InventoryFillSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."InventoryFillEntry" ADD CONSTRAINT "InventoryFillEntry_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "public"."InventoryFillSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."InventoryFillEntry" ADD CONSTRAINT "InventoryFillEntry_sourceItemId_fkey" FOREIGN KEY ("sourceItemId") REFERENCES "public"."InventoryFillSourceItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."InventoryFillEntryTag" ADD CONSTRAINT "InventoryFillEntryTag_entryId_fkey" FOREIGN KEY ("entryId") REFERENCES "public"."InventoryFillEntry"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."InventoryFillEntryTag" ADD CONSTRAINT "InventoryFillEntryTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "public"."Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
