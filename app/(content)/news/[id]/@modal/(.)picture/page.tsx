"use client";

import { notFound, useRouter } from "next/navigation";
import { getNewsItem } from "@/db/access";

export default async function InterceptedPage({ params: { id } }) {
  const router = useRouter();
  const newsItem = await getNewsItem(id);

  if (!newsItem) {
    notFound();
  }

  const closeModal = () => {
    router.back();
  };
  return (
    <>
      <div className="modal-backdrop" onClick={closeModal} />
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
