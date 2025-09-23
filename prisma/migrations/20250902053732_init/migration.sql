-- CreateTable
CREATE TABLE "public"."Package" (
    "id" TEXT NOT NULL,
    "packageNumber" TEXT,
    "proxyName" TEXT,
    "proxyPageUrl" TEXT,
    "purchaseDate" TIMESTAMP(3),
    "currency" TEXT NOT NULL DEFAULT 'JPY',
    "proxyFeeTotal" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "intlShippingTotal" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "domesticShippingTotal" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "customsTotal" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "trackingNumber" TEXT,
    "trackingCarrier" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Package_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SubPackage" (
    "id" TEXT NOT NULL,
    "packageId" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "weightG" INTEGER,
    "notes" TEXT,

    CONSTRAINT "SubPackage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Type" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Brand" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Platform" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Platform_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Item" (
    "id" TEXT NOT NULL,
    "packageId" TEXT NOT NULL,
    "subPackageId" TEXT NOT NULL,
    "title" TEXT,
    "photoUrl" TEXT,
    "priceWeight" DECIMAL(12,4) NOT NULL DEFAULT 0,
    "categoryId" TEXT,
    "typeId" TEXT,
    "brandId" TEXT,
    "platformId" TEXT,
    "quantityIndex" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Package_packageNumber_idx" ON "public"."Package"("packageNumber");

-- CreateIndex
CREATE INDEX "SubPackage_packageId_idx" ON "public"."SubPackage"("packageId");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "public"."Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Type_name_key" ON "public"."Type"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Brand_name_key" ON "public"."Brand"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Platform_name_key" ON "public"."Platform"("name");

-- CreateIndex
CREATE INDEX "Item_packageId_idx" ON "public"."Item"("packageId");

-- CreateIndex
CREATE INDEX "Item_subPackageId_idx" ON "public"."Item"("subPackageId");

-- CreateIndex
CREATE INDEX "Item_categoryId_idx" ON "public"."Item"("categoryId");

-- CreateIndex
CREATE INDEX "Item_typeId_idx" ON "public"."Item"("typeId");

-- CreateIndex
CREATE INDEX "Item_brandId_idx" ON "public"."Item"("brandId");

-- CreateIndex
CREATE INDEX "Item_platformId_idx" ON "public"."Item"("platformId");

-- AddForeignKey
ALTER TABLE "public"."SubPackage" ADD CONSTRAINT "SubPackage_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "public"."Package"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Item" ADD CONSTRAINT "Item_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "public"."Package"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Item" ADD CONSTRAINT "Item_subPackageId_fkey" FOREIGN KEY ("subPackageId") REFERENCES "public"."SubPackage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Item" ADD CONSTRAINT "Item_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Item" ADD CONSTRAINT "Item_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "public"."Type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Item" ADD CONSTRAINT "Item_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "public"."Brand"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Item" ADD CONSTRAINT "Item_platformId_fkey" FOREIGN KEY ("platformId") REFERENCES "public"."Platform"("id") ON DELETE SET NULL ON UPDATE CASCADE;
