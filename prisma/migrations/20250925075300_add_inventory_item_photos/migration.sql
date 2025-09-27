-- CreateEnum
CREATE TYPE "public"."InventoryItemPhotoKind" AS ENUM ('Reference', 'Actual');

-- CreateTable
CREATE TABLE "public"."InventoryItemPhoto" (
    "id" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "kind" "public"."InventoryItemPhotoKind" NOT NULL,
    "url" TEXT NOT NULL,
    "source" TEXT,
    "width" INTEGER,
    "height" INTEGER,
    "sha256" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InventoryItemPhoto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "InventoryItemPhoto_sha256_key" ON "public"."InventoryItemPhoto"("sha256");

-- CreateIndex
CREATE INDEX "InventoryItemPhoto_itemId_kind_idx" ON "public"."InventoryItemPhoto"("itemId", "kind");

-- AddForeignKey
ALTER TABLE "public"."InventoryItemPhoto" ADD CONSTRAINT "InventoryItemPhoto_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "public"."InventoryItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
