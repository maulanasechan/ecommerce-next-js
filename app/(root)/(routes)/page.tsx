"use client";

import { useEffect, useState } from "react";

import { Modal } from "@/components/modal";
import { useStoreModal } from "@/hooks/use-store-modal";

export default function SetUpPage() {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
}
