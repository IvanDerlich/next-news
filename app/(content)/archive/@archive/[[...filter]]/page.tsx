import { getAvailableNewsYears, getAvailableNewsMonths } from "@/prisma/access";

import FilteredNews from "@/components/FilteredNews";
import { Suspense } from "react";
import FilterHeader from "@/components/FilterHeader";

async function page({ params: { filter } }) {
  const selectedYear: string | undefined = filter?.[0];
  const selectedMonth: string | undefined = filter?.[1];
  const availableNewsYear = await getAvailableNewsYears();
  const availableNewsMonth = await getAvailableNewsMonths(selectedYear);

  if (
    (selectedYear && !availableNewsYear.includes(+selectedYear)) ||
    (selectedMonth && !availableNewsMonth.includes(+selectedMonth))
  ) {
    throw new Error("Invalid filter");
  }

  let links = availableNewsYear;
  if (selectedYear && !selectedMonth) {
    links = availableNewsMonth;
  } else if (selectedYear && selectedMonth) {
    links = [];
  }

  return (
    <>
      <Suspense fallback={<div>Loading Filter Header...</div>}>
        <FilterHeader year={selectedYear} links={links} />
      </Suspense>
      <Suspense fallback={<div>Loading Filtered News...</div>}>
        <FilteredNews month={selectedMonth} year={selectedYear} />
      </Suspense>
    </>
  );
}

export default page;
