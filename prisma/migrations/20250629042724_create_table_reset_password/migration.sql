-- CreateTable
CREATE TABLE "ResetUserPassword" (
    "id" TEXT NOT NULL,
    "resetToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expiresIn" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ResetUserPassword_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ResetUserPassword_resetToken_key" ON "ResetUserPassword"("resetToken");

-- AddForeignKey
ALTER TABLE "ResetUserPassword" ADD CONSTRAINT "ResetUserPassword_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
