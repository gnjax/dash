-- CreateEnum
CREATE TYPE "public"."InventoryCondition" AS ENUM ('Loose', 'Boxed', 'CIB', 'NIB');

-- AlterTable
ALTER TABLE "public"."InventoryFillEntry" ADD COLUMN     "condition" "public"."InventoryCondition" NOT NULL DEFAULT 'Loose';

-- AlterTable
ALTER TABLE "public"."InventoryItem" ADD COLUMN     "condition" "public"."InventoryCondition" NOT NULL DEFAULT 'Loose';
