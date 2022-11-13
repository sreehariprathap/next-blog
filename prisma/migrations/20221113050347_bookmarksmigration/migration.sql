-- CreateTable
CREATE TABLE "Bookmark" (
    "id" SERIAL NOT NULL,
    "authorId" TEXT,
    "postId" TEXT,

    CONSTRAINT "Bookmark_pkey" PRIMARY KEY ("id")
);
