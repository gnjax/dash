-- DropForeignKey
ALTER TABLE "public"."TagClosure" DROP CONSTRAINT "TagClosure_ancestorId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TagClosure" DROP CONSTRAINT "TagClosure_descendantId_fkey";

-- AddForeignKey
ALTER TABLE "public"."TagClosure" ADD CONSTRAINT "TagClosure_ancestorId_fkey" FOREIGN KEY ("ancestorId") REFERENCES "public"."Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TagClosure" ADD CONSTRAINT "TagClosure_descendantId_fkey" FOREIGN KEY ("descendantId") REFERENCES "public"."Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
