import { Button } from "@/components/ui/button";
import { truncateFileName } from "@/hooks/truncate-file-name";
import { StoredFile } from "@/hooks/use-uploaded-files";
import { File, Trash } from "lucide-react";
import Image from "next/image";

type UploadedFileProps = {
  file: StoredFile;
  onDelete: () => void;
};

export function UploadedFile({ file, onDelete }: UploadedFileProps) {
  const getFileIcon = (fileName: string) => {
    const ext = fileName.split(".").pop()?.toLowerCase();
    switch (ext) {
      case "doc":
      case "docx":
        return (
          <Image src="/file/icon-word.png" alt="word" width={50} height={50} />
        );
      case "xls":
      case "xlsx":
        return (
          <Image
            src="/file/icon-excel.png"
            alt="excel"
            width={50}
            height={50}
          />
        );
      case "pdf":
        return (
          <Image src="/file/icon-pdf.png" alt="pdf" width={50} height={50} />
        );
      case "js":
      case "ts":
      case "json":
        return (
          <Image src="/file/icon-ts.png" alt="ts" width={50} height={50} />
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
    <div className="flex flex-col items-center w-[240px] h-[240px] backdrop-blur-[12px] bg-white/5 border-[#656F84] rounded-[24px] justify-between  p-3">
      <div className="w-full h-[150px] rounded-[24px] bg-white/10 flex items-center justify-center">
        {getFileIcon(file.name)}
      </div>
      <div className="w-full justify-between flex p-2 items-center">
        <div className="flex flex-col gap-2">
          <p className="font-bold text-[12px] Inter tracking-wide">
            {truncateFileName(file.name, 25)}
          </p>
          <p className="text-[10px] text-[#dddddd] tracking-wide">
            Хэмжээ: {formatFileSize(file.size)}
          </p>
        </div>
        <Button variant="ghost" onClick={onDelete} className="cursor-pointer">
          <Trash color="#656F84" fill="#656F84" />
        </Button>
      </div>
    </div>
  );
}
