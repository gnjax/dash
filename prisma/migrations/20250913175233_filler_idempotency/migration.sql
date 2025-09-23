/*
  Warnings:

  - A unique constraint covering the columns `[fillEntryId,ordinal]` on the table `InventoryItem` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."InventoryFillSession" ADD COLUMN     "finalizedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "public"."InventoryItem" ADD COLUMN     "ordinal" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "InventoryItem_fillEntryId_ordinal_key" ON "public"."InventoryItem"("fillEntryId", "ordinal");
