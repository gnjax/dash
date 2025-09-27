/*
  Warnings:

  - You are about to drop the `InventoryItemPhoto` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."InventoryItemPhoto" DROP CONSTRAINT "InventoryItemPhoto_itemId_fkey";

-- AlterTable
ALTER TABLE "public"."Tag" ADD COLUMN     "photoUrl" TEXT;

-- DropTable
DROP TABLE "public"."InventoryItemPhoto";

-- DropEnum
DROP TYPE "public"."InventoryItemPhotoKind";
