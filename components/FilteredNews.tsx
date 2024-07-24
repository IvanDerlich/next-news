import { getNewsForYear, getNewsForYearAndMonth } from "@/prisma/access";
import NewsList from "@/components/NewsList";

async function FilteredNews({ month, year }) {
  let news;
  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  if (news && news.length > 0) {
    return <NewsList news={news} />;
  } else if (!year && !month) {
    return <></>;
  }
  return <p>No news found for the selected period</p>;
}

export default FilteredNews;
