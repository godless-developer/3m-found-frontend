"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

interface ConfirmDeleteToastProps {
  fileName: string;
  onConfirm: () => void;
}

export function confirmDeleteUploadedFile({
  onConfirm,
  fileName,
}: ConfirmDeleteToastProps) {
  toast.custom((t) => (
    <div className="backdrop-blur-[6px] rounded-xl shadow-lg p-4 flex flex-col gap-3">
      <p className="font-medium">“{fileName}” устгах уу?</p>
      <div className="flex gap-2 justify-around">
        <Button variant="secondary" onClick={() => toast.dismiss(t)}>
          Цуцлах
        </Button>
        <Button
          variant="destructive"
          onClick={() => {
            onConfirm();
            toast.dismiss(t);
          }}
        >
          Тийм
        </Button>
      </div>
    </div>
  ));
}
