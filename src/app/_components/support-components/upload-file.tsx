"use client";

import * as React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UploadCloud, File } from "lucide-react";
import Image from "next/image";
import { truncateFileName } from "@/hooks/truncate-file-name";

type FormValues = {
  file?: FileList;
};
type FileUploadComponentProps = {
  onFileUpload: (file: File) => void;
};

export function FileUploadComponent({
  onFileUpload,
}: FileUploadComponentProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const form = useForm<FormValues>({
    defaultValues: {
      file: undefined,
    },
  });

  const onSubmit = () => {
    if (selectedFile) {
      onFileUpload(selectedFile);
      setSelectedFile(null);
    }
  };

  const handleDelete = () => {
    setSelectedFile(null);
    form.setValue("file", undefined);
  };

  const getFileIcon = (fileName: string) => {
    const ext = fileName.split(".").pop()?.toLowerCase();
    switch (ext) {
      case "doc":
      case "docx":
        return (
          <Image
            src={"/file/icon-word.png"}
            alt="word"
            width={50}
            height={50}
          />
        );
      case "xls":
      case "xlsx":
        return (
          <Image
            src={"/file/icon-excel.png"}
            alt="excel"
            width={50}
            height={50}
          />
        );
      case "pdf":
        return (
          <Image src={"/file/icon-pdf.png"} alt="pdf" width={50} height={50} />
        );
      case "js":
      case "ts":
      case "json":
        return (
          <Image src={"/file/icon-ts.png"} alt="ts" width={50} height={50} />
        );
      default:
        return (
          <File
            strokeWidth={1.5}
            color="#000"
            className="w-10 h-10 text-gray-400"
          />
        );
    }
  };

  const formatFileSize = (size: number) => {
    if (size < 1024) return `${size} B`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
    return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem className="flex flex-col items-center w-[240px] h-[240px] border-[0.5px] backdrop-blur-[12px] bg-white/5 border-[#656F84] rounded-[24px] justify-center relative p-4">
              {!selectedFile ? (
                <>
                  <UploadCloud className="w-12 h-12 text-white mb-2" />
                  <FormLabel className="Inter tracking-wider text-[16px] font-semibold">
                    Файл оруулах
                  </FormLabel>
                  <FormDescription className="Inter font-normal text-[11px] text-[#dddddd] text-center">
                    Энд дарж файлаа оруулна уу.
                  </FormDescription>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="bg-[#ffffff] text-black px-8 mt-4 text-[14px] font-semibold Inter cursor-pointer transition-all duration-300 ease-in-out"
                    onClick={() =>
                      document.getElementById("fileInput")?.click()
                    }
                  >
                    Сонгох
                  </Button>
                  <Input
                    id="fileInput"
                    type="file"
                    className="hidden"
                    onChange={(e) => {
                      field.onChange(e.target.files);
                      if (e.target.files && e.target.files[0]) {
                        setSelectedFile(e.target.files[0]);
                        console.log(e.target.files[0]);
                      }
                    }}
                  />
                </>
              ) : (
                <div className="flex flex-col items-center justify-center gap-2">
                  {getFileIcon(selectedFile.name)}
                  <p className="text-sm font-medium">
                    {truncateFileName(selectedFile.name, 25)}
                  </p>
                  <p className="text-xs text-gray-400">
                    {formatFileSize(selectedFile.size)}
                  </p>
                  <div className="flex gap-6 mt-6">
                    <Button type="submit" size="sm" className="cursor-pointer">
                      Хадгалах
                    </Button>
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      onClick={handleDelete}
                      className="cursor-pointer px-5"
                    >
                      Устгах
                    </Button>
                  </div>
                </div>
              )}
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
