import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  await prisma.category.createMany({
    data: ["Video game","Arcade"].map(name => ({ name })), skipDuplicates: true
  });
  await prisma.type.createMany({
    data: ["Console","Game","Controller","PCB"].map(name => ({ name })), skipDuplicates: true
  });
  await prisma.brand.createMany({
    data: ["Nintendo","Konami","SEGA","Sony","Taito","SNK","NEC"].map(name => ({ name })), skipDuplicates: true
  });
  await prisma.platform.createMany({
    data: ["Famicom", "Super Famicom","N64","GameBoy","GameBoy Advance", "Gamecube", "Wii", "Wii U", "DS", "3DS","PS1","PS2", "PS3", "PSP", "PSVita", "Mark3", "MegaDrive", "Saturn","Dreamcast", "GameGear", "Neo Geo", "NEC PC Engine"].map(name => ({ name })), skipDuplicates: true
  });
}
main().finally(()=>prisma.$disconnect());