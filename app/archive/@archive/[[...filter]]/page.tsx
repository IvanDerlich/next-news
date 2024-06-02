// import NewsList from "@/components/NewsList";
// import { getNewsForYear } from "@/helper-methods/news";
import { getAvailableNewsYears } from "@/helper-methods/news";
import Link from "next/link";

function page({ params: { filter } }) {
  // const news = getNewsForYear(filter);
  const links = getAvailableNewsYears();
  console.log("filter: ", filter);
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default page;
