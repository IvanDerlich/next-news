"use client";

import { useRouter } from "next/navigation";

function ModalBackDrop() {
  const router = useRouter();
  const closeModal = () => {
    router.back();
  };
  return <div className="modal-backdrop" onClick={closeModal} />;
}

export default ModalBackDrop;
