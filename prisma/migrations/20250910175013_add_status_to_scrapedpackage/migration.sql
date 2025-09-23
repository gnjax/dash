-- CreateEnum
CREATE TYPE "public"."PackageStatus" AS ENUM ('Todo', 'Processed', 'Blacklist');

-- AlterTable
ALTER TABLE "public"."ScrapedPackage" ADD COLUMN     "status" "public"."PackageStatus" NOT NULL DEFAULT 'Todo';
