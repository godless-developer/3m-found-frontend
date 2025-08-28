"use client";

import * as React from "react";
import { toast } from "sonner";
import {
  AddFileSearchSelect,
  confirmDeleteUploadedFile,
  FileUploadComponent,
  UploadedFile,
} from "../support-components";
import { useUploadedFiles } from "@/hooks/use-uploaded-files";

export function MainAddFile() {
  const { uploadedFiles, setUploadedFiles } = useUploadedFiles();

  const handleFileUpload = (file: File) => {
    setUploadedFiles((prev) => [...prev, file]);
    toast.success("Файл нэмэгдлээ!");
  };

  const handleDeleteFile = (file: File) => {
    confirmDeleteUploadedFile({
      fileName: file.name,
      onConfirm: () =>
        setUploadedFiles((prev) => prev.filter((f) => f.name !== file.name)),
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <AddFileSearchSelect />
      <div className="grid grid-cols-5 gap-4">
        <FileUploadComponent onFileUpload={handleFileUpload} />
        {uploadedFiles.map((file, index) => (
          <UploadedFile
            key={index}
            file={file}
            onDelete={() => handleDeleteFile(file)}
          />
        ))}
      </div>
    </div>
  );
}
