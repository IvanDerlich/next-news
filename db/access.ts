const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

export async function getAllNews() {
  // SELECT * FROM news
  const news = await db.news.findMany();
  return news;
}

// export function getLatestNews() {
//   return DUMMY_NEWS.slice(0, 3);
// }

export function getLatestNews() {
  // SELECT * FROM news ORDER BY date DESC LIMIT 3
  return db.news.findMany({
    take: 3,
    orderBy: {
      date: "desc",
    },
  });
}

// export function getAvailableNewsYears() {
//   return DUMMY_NEWS.reduce((years, news) => {
//     const year = new Date(news.date).getFullYear();
//     if (!years.includes(year)) {
//       years.push(year);
//     }
//     return years;
//   }, []).sort((a, b) => b - a);
// }

export function getAvailableNewsYears() {
  // SELECT DISTINCT strftime('%Y', date) as year FROM news
  const formattedResult = db.news.findMany({
    distinct: ["date"],
    select: {
      date: true,
    },
  });
  // const data = db.$queryRaw`SELECT DISTINCT EXTRACT(YEAR FROM date) as year FROM news`;
  // console.log("data", data);
  // const formattedResult = data.map((row) => ({ date: row.year }));
  // console.log("formattedResult", formattedResult);
  return formattedResult;
}

// export function getAvailableNewsMonths(year) {
//   return DUMMY_NEWS.reduce((months, news) => {
//     const newsYear = new Date(news.date).getFullYear();
//     if (newsYear === +year) {
//       const month = new Date(news.date).getMonth();
//       if (!months.includes(month)) {
//         months.push(month + 1);
//       }
//     }
//     return months;
//   }, []).sort((a, b) => b - a);
// }

export function getAvailableNewsMonths(year) {
  return db.news.findMany({
    where: {
      date: {
        contains: year,
      },
    },
    distinct: ["date"],
    select: {
      date: true,
    },
  });
}

// export function getNewsForYear(year) {
//   return DUMMY_NEWS.filter(
//     (news) => new Date(news.date).getFullYear() === +year
//   );
// }

export function getNewsForYear(year) {
  return db.news.findMany({
    where: {
      date: {
        contains: year,
      },
    },
  });
}

// export function getNewsForYearAndMonth(year, month) {
//   return DUMMY_NEWS.filter((news) => {
//     const newsYear = new Date(news.date).getFullYear();
//     const newsMonth = new Date(news.date).getMonth() + 1;
//     return newsYear === +year && newsMonth === +month;
//   });
// }

export function getNewsForYearAndMonth(year, month) {
  return db.news.findMany({
    where: {
      date: {
        contains: `${year}-${month}`,
      },
    },
  });
}

// export async function getNewsItem(slug) {
//   const newsItem = db.prepare('SELECT * FROM news WHERE slug = ?').get(slug);

//   await new Promise((resolve) => setTimeout(resolve, 2000));

//   return newsItem;
// }

export async function getNewsItem(slug) {
  const newsItem = await db.news.findUnique({
    where: {
      slug,
    },
  });

  return newsItem;
}
