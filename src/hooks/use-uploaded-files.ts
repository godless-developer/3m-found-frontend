"use client";

import { getFiles } from "@/utils/requests";
import { useState, useEffect } from "react";

export interface StoredFile {
  name: string;
  type: string;
  size: number;
  id: string;
}

export function useUploadedFiles() {
  const [uploadedFiles, setUploadedFiles] = useState<StoredFile[]>([]);
  const getData = async () => {
    const res = await getFiles();
    const formattedFiles = res.map(
      (file: { metadata: { name: string; size: string }; id: string }) => {
        return {
          id: file.id,
          name: file.metadata.name,
          size: file.metadata.size,
        };
      }
    );
    setUploadedFiles(formattedFiles);
    console.log(res);
  };

  useEffect(() => {
    // const storedFiles = localStorage.getItem("uploadedFiles");
    // if (storedFiles) {
    //   try {
    //     const parsedFiles: StoredFile[] = JSON.parse(storedFiles);
    //     const files: File[] = parsedFiles.map((f) => {
    //       const file = new File([""], f.name, { type: f.type });
    //       Object.defineProperty(file, "size", {
    //         value: f.size,
    //         writable: false,
    //       });
    //       return file;
    //     });
    //     setUploadedFiles(files);
    //   } catch (e) {
    //     console.error("LocalStorage parse error:", e);
    //   }
    // }
    getData();
  }, []);

  // useEffect(() => {
  //   if (uploadedFiles.length > 0) {
  //     const filesToStore: StoredFile[] = uploadedFiles.map((file) => ({
  //       name: file.name,
  //       type: file.type,
  //       size: file.size,
  //     }));
  //     localStorage.setItem("uploadedFiles", JSON.stringify(filesToStore));
  //   } else {
  //     localStorage.removeItem("uploadedFiles");
  //   }
  // }, [uploadedFiles]);

  return { uploadedFiles, setUploadedFiles, getData };
}
