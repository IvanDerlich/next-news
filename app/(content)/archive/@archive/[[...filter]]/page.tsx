import NewsList from "@/components/NewsList";
import {
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
  getAvailableNewsMonths,
} from "@/prisma/access";
import Link from "next/link";
import { months } from "@/enums";

async function page({ params: { filter } }) {
  const selectedYear: string | undefined = filter?.[0];
  const selectedMonth: string | undefined = filter?.[1];
  const availableNewsYear = await getAvailableNewsYears();
  const availableNewsMonth = await getAvailableNewsMonths(selectedYear);

  let news = [];
  let links = availableNewsYear;
  let newsContent;

  if (
    (selectedYear && !availableNewsYear.includes(+selectedYear)) ||
    (selectedMonth && !availableNewsMonth.includes(+selectedMonth))
  ) {
    throw new Error("Invalid filter");
  }

  if (selectedYear && !selectedMonth) {
    news = await getNewsForYear(selectedYear);
    links = availableNewsMonth;
  } else if (selectedYear && selectedMonth) {
    news = await getNewsForYearAndMonth(+selectedYear, +selectedMonth);
    links = [];
  }

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  } else if (!selectedYear && !selectedMonth) {
    newsContent = <></>;
  } else {
    newsContent = <p>No news found for the selected period</p>;
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href_ext = selectedYear ? `${selectedYear}/${link}` : link;
              return (
                <li key={link}>
                  <Link href={`/archive/${href_ext}`}>
                    {selectedYear ? months[link - 1] : link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}

export default page;
