-- CreateTable
CREATE TABLE "public"."TagPlacement" (
    "id" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,
    "parentPlacementId" TEXT,

    CONSTRAINT "TagPlacement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PlacementClosure" (
    "ancestorPlacementId" TEXT NOT NULL,
    "descendantPlacementId" TEXT NOT NULL,
    "depth" INTEGER NOT NULL,

    CONSTRAINT "PlacementClosure_pkey" PRIMARY KEY ("ancestorPlacementId","descendantPlacementId")
);

-- CreateIndex
CREATE INDEX "TagPlacement_tagId_idx" ON "public"."TagPlacement"("tagId");

-- CreateIndex
CREATE UNIQUE INDEX "TagPlacement_parentPlacementId_tagId_key" ON "public"."TagPlacement"("parentPlacementId", "tagId");

-- CreateIndex
CREATE INDEX "PlacementClosure_descendantPlacementId_depth_idx" ON "public"."PlacementClosure"("descendantPlacementId", "depth");

-- CreateIndex
CREATE INDEX "PlacementClosure_ancestorPlacementId_depth_idx" ON "public"."PlacementClosure"("ancestorPlacementId", "depth");

-- AddForeignKey
ALTER TABLE "public"."TagPlacement" ADD CONSTRAINT "TagPlacement_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "public"."Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TagPlacement" ADD CONSTRAINT "TagPlacement_parentPlacementId_fkey" FOREIGN KEY ("parentPlacementId") REFERENCES "public"."TagPlacement"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PlacementClosure" ADD CONSTRAINT "PlacementClosure_ancestorPlacementId_fkey" FOREIGN KEY ("ancestorPlacementId") REFERENCES "public"."TagPlacement"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PlacementClosure" ADD CONSTRAINT "PlacementClosure_descendantPlacementId_fkey" FOREIGN KEY ("descendantPlacementId") REFERENCES "public"."TagPlacement"("id") ON DELETE CASCADE ON UPDATE CASCADE;
