import { notFound } from "next/navigation";
import { getNewsItem } from "@/prisma/access";
import ModalBackDrop from "@/components/ModalBackDrop";

export default async function InterceptedPage({ params: { id } }) {
  const newsItem = await getNewsItem(id);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackDrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            style={{ width: "100%" }}
          />
        </div>
      </dialog>
    </>
  );
}
