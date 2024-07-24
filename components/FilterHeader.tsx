import Link from "next/link";
import { months } from "@/enums";

async function FiltereHeader({ year, links }) {
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href_ext = year ? `${year}/${link}` : link;
            return (
              <li key={link}>
                <Link href={`/archive/${href_ext}`}>
                  {year ? months[link - 1] : link}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default FiltereHeader;
