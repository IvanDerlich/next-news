const { PrismaClient } = require("@prisma/client");
const { DUMMY_NEWS } = require("./seedData.js");

const prisma = new PrismaClient();

async function main() {
  await Promise.all(
    DUMMY_NEWS.map((news) =>
      prisma.news.create({
        data: news,
      })
    )
  );

  console.log("Database has been populated with news data.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
