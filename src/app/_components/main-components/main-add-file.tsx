"use client";

import * as React from "react";
import {
  AddFileSearchSelect,
  confirmDeleteUploadedFile,
  FileUploadComponent,
  UploadedFile,
} from "../support-components";
import { useUploadedFiles } from "@/hooks/use-uploaded-files";
import { deleteFile, uploadFile } from "@/utils/requests";
import { toast } from "sonner";

export function MainAddFile() {
  const { uploadedFiles, getData } = useUploadedFiles();

  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedType, setSelectedType] = React.useState<string>("");

  const handleFileUpload = async (file: File) => {
    const response = await uploadFile(file);
    if (response) {
      toast("file amjilltai nemlee");
      getData();
    }
  };

  const handleDeleteFile = (id: string, fileName: string) => {
    confirmDeleteUploadedFile({
      fileName,
      onConfirm: () => {
        try {
          deleteFile(id, getData);
        } catch (error) {
          console.log(error);
        }
      },
    });
  };

  const getFileType = (fileName: string) => {
    const ext = fileName.split(".").pop()?.toLowerCase();
    if (!ext) return "other";
    if (["doc", "docx"].includes(ext)) return "word";
    if (["xls", "xlsx"].includes(ext)) return "excel";
    if (["pdf"].includes(ext)) return "pdf";
    if (["js", "ts", "json"].includes(ext)) return "code";
    return "other";
  };

  const filteredFiles = uploadedFiles.filter((file) => {
    const matchesSearch = file.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesType =
      selectedType === "all" || selectedType === ""
        ? true
        : getFileType(file.name) === selectedType;

    return matchesSearch && matchesType;
  });

  let message: string | null = null;
  if (uploadedFiles.length === 0) {
    message = "Файл байхгүй байна";
  } else if (filteredFiles.length === 0) {
    if (searchTerm) {
      message = `"${searchTerm}" нэртэй файл алга`;
    } else if (selectedType) {
      message = "Энэ төрлийн файл алга";
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <AddFileSearchSelect
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        options={[
          { value: "all", label: "All files" },
          { value: "word", label: "Word files" },
          { value: "excel", label: "Excel files" },
          { value: "pdf", label: "PDF files" },
          { value: "code", label: "Ts/Js files" },
          { value: "other", label: "Other files" },
        ]}
        tooltip="Энэ бол байгууллагатайгаа холбоотой бүхий л дотоод журам, мэдээлэлээ нэг дор хадгалдаг булан шүү"
        selectDate="Файлын төрлүүд"
        inputHolder="Файлын нэрээр..."
      />
      <div className="grid grid-cols-5 gap-4 max-h-[630px] rounded-l-[24px] overflow-hidden overflow-y-auto">
        <div className="sticky top-0 z-10 bg-[#0e0e0e]/40 rounded-[24px] w-[240px] h-[240px]">
          <FileUploadComponent onFileUpload={handleFileUpload} />
        </div>
        {message ? (
          <div className="w-[240px] h-[240px] justify-center items-center">
            <p className="text-center text-gray-400">{message}</p>
          </div>
        ) : (
          filteredFiles.map((file, index) => (
            <UploadedFile
              key={index}
              file={file}
              onDelete={() => handleDeleteFile(file.id, file.name)}
            />
          ))
        )}
      </div>
    </div>
  );
}
