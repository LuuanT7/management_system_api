/*
  Warnings:

  - You are about to drop the column `studentId` on the `Attendance` table. All the data in the column will be lost.
  - You are about to drop the column `studentId` on the `Enrollment` table. All the data in the column will be lost.
  - You are about to drop the column `studentId` on the `GradeReport` table. All the data in the column will be lost.
  - The primary key for the `Student` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Student` table. All the data in the column will be lost.
  - Added the required column `studentRA` to the `Attendance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studentRA` to the `Enrollment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studentRA` to the `GradeReport` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Attendance" DROP CONSTRAINT "Attendance_studentId_fkey";

-- DropForeignKey
ALTER TABLE "Enrollment" DROP CONSTRAINT "Enrollment_studentId_fkey";

-- DropForeignKey
ALTER TABLE "GradeReport" DROP CONSTRAINT "GradeReport_studentId_fkey";

-- DropIndex
DROP INDEX "Guardian_userId_key";

-- DropIndex
DROP INDEX "Teacher_userId_key";

-- AlterTable
ALTER TABLE "Attendance" DROP COLUMN "studentId",
ADD COLUMN     "studentRA" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Enrollment" DROP COLUMN "studentId",
ADD COLUMN     "studentRA" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "GradeReport" DROP COLUMN "studentId",
ADD COLUMN     "studentRA" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Student" DROP CONSTRAINT "Student_pkey",
DROP COLUMN "id",
ADD COLUMN     "ra" SERIAL NOT NULL,
ADD CONSTRAINT "Student_pkey" PRIMARY KEY ("ra");

-- AddForeignKey
ALTER TABLE "GradeReport" ADD CONSTRAINT "GradeReport_studentRA_fkey" FOREIGN KEY ("studentRA") REFERENCES "Student"("ra") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_studentRA_fkey" FOREIGN KEY ("studentRA") REFERENCES "Student"("ra") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_studentRA_fkey" FOREIGN KEY ("studentRA") REFERENCES "Student"("ra") ON DELETE RESTRICT ON UPDATE CASCADE;
