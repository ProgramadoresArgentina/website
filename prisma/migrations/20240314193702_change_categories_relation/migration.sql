/*
  Warnings:

  - Added the required column `categoryId` to the `Articles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Articles" ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "pinned" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Articles" ADD CONSTRAINT "Articles_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
