/*
  Warnings:

  - You are about to drop the column `description` on the `Certifications` table. All the data in the column will be lost.
  - You are about to drop the column `endYear` on the `Certifications` table. All the data in the column will be lost.
  - You are about to drop the column `startYear` on the `Certifications` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Certifications` table. All the data in the column will be lost.
  - You are about to drop the column `emailUser` on the `Cv` table. All the data in the column will be lost.
  - You are about to drop the column `endYear` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `startYear` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `endYear` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `startYear` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `emailUser` on the `UserSettings` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[url]` on the table `UserSettings` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `degree` to the `Certifications` table without a default value. This is not possible if the table is not empty.
  - Added the required column `linkId` to the `Certifications` table without a default value. This is not possible if the table is not empty.
  - Added the required column `university` to the `Certifications` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currently` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateSince` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `degree` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `university` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currently` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateSince` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - The required column `url` was added to the `UserSettings` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- CreateEnum
CREATE TYPE "LanguageLevel" AS ENUM ('A1_A2', 'B1_B2', 'C1_C2', 'NATIVE');

-- CreateEnum
CREATE TYPE "ExperienceLevel" AS ENUM ('TRAINEE', 'JUNIOR', 'SEMI_SENIOR', 'SENIOR');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('CONTRATANDO', 'BUSCANDO', 'MIEMBRO');

-- CreateEnum
CREATE TYPE "Position" AS ENUM ('FULLSTACK', 'FRONTEND', 'BACKEND', 'TESTER', 'DEVOPS', 'DATA_SCIENCE', 'LEADER', 'VIDEOGAMES', 'CRYPTO', 'CYBERSECURITY', 'UX_UI', 'ADMIN_SYSTEM');

-- DropForeignKey
ALTER TABLE "Cv" DROP CONSTRAINT "Cv_emailUser_fkey";

-- DropForeignKey
ALTER TABLE "UserSettings" DROP CONSTRAINT "UserSettings_emailUser_fkey";

-- DropIndex
DROP INDEX "Cv_emailUser_key";

-- DropIndex
DROP INDEX "Cv_userId_key";

-- DropIndex
DROP INDEX "UserSettings_emailUser_key";

-- AlterTable
ALTER TABLE "Certifications" DROP COLUMN "description",
DROP COLUMN "endYear",
DROP COLUMN "startYear",
DROP COLUMN "title",
ADD COLUMN     "degree" TEXT NOT NULL,
ADD COLUMN     "linkId" TEXT NOT NULL,
ADD COLUMN     "university" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Cv" DROP COLUMN "emailUser";

-- AlterTable
ALTER TABLE "Education" DROP COLUMN "endYear",
DROP COLUMN "startYear",
DROP COLUMN "title",
ADD COLUMN     "currently" BOOLEAN NOT NULL,
ADD COLUMN     "dateSince" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "dateTo" TIMESTAMP(3),
ADD COLUMN     "degree" TEXT NOT NULL,
ADD COLUMN     "university" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "endYear",
DROP COLUMN "startYear",
ADD COLUMN     "company" TEXT NOT NULL,
ADD COLUMN     "currently" BOOLEAN NOT NULL,
ADD COLUMN     "dateSince" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "dateTo" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "UserSettings" DROP COLUMN "emailUser",
ADD COLUMN     "behance" TEXT,
ADD COLUMN     "experienceLevel" "ExperienceLevel" NOT NULL DEFAULT 'TRAINEE',
ADD COLUMN     "github" TEXT,
ADD COLUMN     "linkedin" TEXT,
ADD COLUMN     "minidescription" TEXT,
ADD COLUMN     "position" "Position"[],
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'BUSCANDO',
ADD COLUMN     "url" TEXT NOT NULL,
ALTER COLUMN "firstName" DROP NOT NULL,
ALTER COLUMN "lastName" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Languages" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "level" "LanguageLevel" NOT NULL,
    "languagesId" INTEGER NOT NULL,

    CONSTRAINT "Languages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Articles" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0,
    "url" TEXT NOT NULL,
    "viewsPerDay" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Articles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hashtags" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Hashtags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Achievements" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "Achievements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ArticlesToHashtags" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_AchievementsToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Articles_url_key" ON "Articles"("url");

-- CreateIndex
CREATE UNIQUE INDEX "_ArticlesToHashtags_AB_unique" ON "_ArticlesToHashtags"("A", "B");

-- CreateIndex
CREATE INDEX "_ArticlesToHashtags_B_index" ON "_ArticlesToHashtags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AchievementsToUser_AB_unique" ON "_AchievementsToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_AchievementsToUser_B_index" ON "_AchievementsToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "UserSettings_url_key" ON "UserSettings"("url");

-- AddForeignKey
ALTER TABLE "Languages" ADD CONSTRAINT "Languages_languagesId_fkey" FOREIGN KEY ("languagesId") REFERENCES "Cv"("id") ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "Articles" ADD CONSTRAINT "Articles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "_ArticlesToHashtags" ADD CONSTRAINT "_ArticlesToHashtags_A_fkey" FOREIGN KEY ("A") REFERENCES "Articles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArticlesToHashtags" ADD CONSTRAINT "_ArticlesToHashtags_B_fkey" FOREIGN KEY ("B") REFERENCES "Hashtags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AchievementsToUser" ADD CONSTRAINT "_AchievementsToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Achievements"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AchievementsToUser" ADD CONSTRAINT "_AchievementsToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
