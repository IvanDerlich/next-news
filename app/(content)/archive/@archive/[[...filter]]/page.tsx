import NewsList from "@/components/NewsList";
import {
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
  getAvailableNewsMonths,
} from "@/db/access";
import Link from "next/link";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function page({ params: { filter } }) {
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];
  const availableNewsYear = getAvailableNewsYears();
  const availableNewsMonth = getAvailableNewsMonths(selectedYear);

  let news = [];
  let links = availableNewsYear;
  let newsContent = <p>No news fond for the selected period</p>;
  if (
    (selectedYear && !availableNewsYear.includes(+selectedYear)) ||
    (selectedMonth && !availableNewsMonth.includes(+selectedMonth))
  ) {
    throw new Error("Invalid filter");
  }
  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = availableNewsMonth;
  } else if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
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
                    {selectedYear ? months[link] : link}
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
