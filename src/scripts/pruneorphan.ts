// scripts/prune-orphan-tags.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  await prisma.$executeRawUnsafe(`
    DELETE FROM "Tag" t
    WHERE NOT EXISTS (SELECT 1 FROM "TagPlacement" p WHERE p."tagId" = t."id")
      AND NOT EXISTS (SELECT 1 FROM "ItemTag" it WHERE it."tagId" = t."id");
  `);
  console.log('Pruned orphan tags.');
}
main().finally(() => prisma.$disconnect());