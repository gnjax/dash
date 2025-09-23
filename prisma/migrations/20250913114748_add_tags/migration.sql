/*
  Warnings:

  - You are about to drop the column `brandId` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `photoUrl` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `platformId` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `quantityIndex` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `typeId` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `weightG` on the `SubPackage` table. All the data in the column will be lost.
  - You are about to drop the `Brand` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Platform` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Type` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Item" DROP CONSTRAINT "Item_brandId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Item" DROP CONSTRAINT "Item_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Item" DROP CONSTRAINT "Item_platformId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Item" DROP CONSTRAINT "Item_typeId_fkey";

-- DropIndex
DROP INDEX "public"."Item_brandId_idx";

-- DropIndex
DROP INDEX "public"."Item_categoryId_idx";

-- DropIndex
DROP INDEX "public"."Item_platformId_idx";

-- DropIndex
DROP INDEX "public"."Item_typeId_idx";

-- AlterTable
ALTER TABLE "public"."Item" DROP COLUMN "brandId",
DROP COLUMN "categoryId",
DROP COLUMN "createdAt",
DROP COLUMN "photoUrl",
DROP COLUMN "platformId",
DROP COLUMN "quantityIndex",
DROP COLUMN "title",
DROP COLUMN "typeId";

-- AlterTable
ALTER TABLE "public"."Package" ADD COLUMN     "priceYen" DECIMAL(12,2);

-- AlterTable
ALTER TABLE "public"."SubPackage" DROP COLUMN "weightG",
ADD COLUMN     "priceWeight" INTEGER;

-- DropTable
DROP TABLE "public"."Brand";

-- DropTable
DROP TABLE "public"."Category";

-- DropTable
DROP TABLE "public"."Platform";

-- DropTable
DROP TABLE "public"."Type";

-- CreateTable
CREATE TABLE "public"."Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "parentId" TEXT,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ItemTag" (
    "itemId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,

    CONSTRAINT "ItemTag_pkey" PRIMARY KEY ("itemId","tagId")
);

-- CreateTable
CREATE TABLE "public"."TagClosure" (
    "ancestorId" TEXT NOT NULL,
    "descendantId" TEXT NOT NULL,
    "depth" INTEGER NOT NULL,

    CONSTRAINT "TagClosure_pkey" PRIMARY KEY ("ancestorId","descendantId")
);

-- CreateIndex
CREATE INDEX "Tag_name_idx" ON "public"."Tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_parentId_name_key" ON "public"."Tag"("parentId", "name");

-- CreateIndex
CREATE INDEX "ItemTag_tagId_idx" ON "public"."ItemTag"("tagId");

-- CreateIndex
CREATE INDEX "TagClosure_descendantId_depth_idx" ON "public"."TagClosure"("descendantId", "depth");

-- CreateIndex
CREATE INDEX "TagClosure_ancestorId_depth_idx" ON "public"."TagClosure"("ancestorId", "depth");

-- AddForeignKey
ALTER TABLE "public"."Tag" ADD CONSTRAINT "Tag_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "public"."Tag"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ItemTag" ADD CONSTRAINT "ItemTag_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "public"."Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ItemTag" ADD CONSTRAINT "ItemTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "public"."Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TagClosure" ADD CONSTRAINT "TagClosure_ancestorId_fkey" FOREIGN KEY ("ancestorId") REFERENCES "public"."Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TagClosure" ADD CONSTRAINT "TagClosure_descendantId_fkey" FOREIGN KEY ("descendantId") REFERENCES "public"."Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
