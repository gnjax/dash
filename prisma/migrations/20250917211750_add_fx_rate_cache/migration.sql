-- CreateTable
CREATE TABLE "public"."FxRate" (
    "date" TIMESTAMP(3) NOT NULL,
    "base" TEXT NOT NULL,
    "quote" TEXT NOT NULL,
    "rate" DECIMAL(20,10) NOT NULL,
    "source" TEXT NOT NULL DEFAULT 'frankfurter',
    "fetchedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FxRate_pkey" PRIMARY KEY ("date","base","quote")
);

-- CreateIndex
CREATE INDEX "FxRate_base_quote_idx" ON "public"."FxRate"("base", "quote");
