import Link from "next/link";
import DisplayImage from "./DisplayImage";

function NewsList({ news }) {
  return (
    <ul className="news-list">
      {news.map((item) => (
        <li key={item.id}>
          <Link href={`/news/${item.id}`}>
            <DisplayImage src={`/images/news/${item.image}`} alt={item.title} />
            <span>{item.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NewsList;
