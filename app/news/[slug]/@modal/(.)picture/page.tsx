"use client";

import { notFound, useRouter } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";
export default function InterceptedPage({ params: { slug } }) {
  const router = useRouter();
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.id === slug);

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
