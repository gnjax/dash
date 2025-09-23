/*
  Warnings:

  - You are about to drop the column `parentId` on the `Tag` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Tag` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "public"."Tag" DROP CONSTRAINT "Tag_parentId_fkey";

-- DropIndex
DROP INDEX "public"."Tag_parentId_name_key";

-- AlterTable
ALTER TABLE "public"."Tag" DROP COLUMN "parentId";

-- CreateTable
CREATE TABLE "public"."TagRelation" (
    "parentId" TEXT NOT NULL,
    "childId" TEXT NOT NULL,

    CONSTRAINT "TagRelation_pkey" PRIMARY KEY ("parentId","childId")
);

-- CreateIndex
CREATE INDEX "TagRelation_childId_idx" ON "public"."TagRelation"("childId");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "public"."Tag"("name");

-- AddForeignKey
ALTER TABLE "public"."TagRelation" ADD CONSTRAINT "TagRelation_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "public"."Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TagRelation" ADD CONSTRAINT "TagRelation_childId_fkey" FOREIGN KEY ("childId") REFERENCES "public"."Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
