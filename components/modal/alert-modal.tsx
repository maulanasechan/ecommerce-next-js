import { useEffect, useState } from "react";
import { Modal } from ".";
import { Button } from "../ui/button";

interface AlertModalProps {
  onClose: () => void;
  onConfirm: () => void;
  isOpen: boolean;
  loading: boolean;
}

export function AlertModal({
  onClose,
  isOpen,
  onConfirm,
  loading,
}: AlertModalProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="Are you sure?"
      description="This action cannot be undone."
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="pt-6 space-x-2 flex items-center justify-end w-full">
        <Button disabled={loading} onClick={onClose} variant="outline">
          Cancel
        </Button>
        <Button disabled={loading} onClick={onConfirm} variant="destructive">
          Continue
        </Button>
      </div>
    </Modal>
  );
}
