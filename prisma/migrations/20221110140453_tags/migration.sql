-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "postId" TEXT[],

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);
