import { prisma } from '@/lib/prisma';

async function main() {
  console.log('Wiping ItemTag, TagClosure, TagRelation, Tag …');
  await prisma.$transaction([
    prisma.itemTag.deleteMany({}),
    prisma.tagClosure.deleteMany({}),
    // If you’re on the new DAG schema, keep this; otherwise it’s harmless if the table doesn’t exist:
    prisma.$executeRawUnsafe(`DO $$ BEGIN
      IF to_regclass('public."TagRelation"') IS NOT NULL THEN
        DELETE FROM "TagRelation";
      END IF;
    END $$;`),
    prisma.tag.deleteMany({}),
  ]);
  console.log('Done.');
}

main().catch(e => {
  console.error(e);
  process.exit(1);
}).finally(async () => prisma.$disconnect());