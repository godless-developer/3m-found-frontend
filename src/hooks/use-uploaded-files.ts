"use client";

import { useState, useEffect } from "react";

interface StoredFile {
  name: string;
  type: string;
  size: number;
}

export function useUploadedFiles() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  useEffect(() => {
    const storedFiles = localStorage.getItem("uploadedFiles");
    if (storedFiles) {
      try {
        const parsedFiles: StoredFile[] = JSON.parse(storedFiles);
        const files: File[] = parsedFiles.map((f) => {
          const file = new File([""], f.name, { type: f.type });
          Object.defineProperty(file, "size", {
            value: f.size,
            writable: false,
          });
          return file;
        });
        setUploadedFiles(files);
      } catch (e) {
        console.error("LocalStorage parse error:", e);
      }
    }
  }, []);

  useEffect(() => {
    if (uploadedFiles.length > 0) {
      const filesToStore: StoredFile[] = uploadedFiles.map((file) => ({
        name: file.name,
        type: file.type,
        size: file.size,
      }));
      localStorage.setItem("uploadedFiles", JSON.stringify(filesToStore));
    } else {
      localStorage.removeItem("uploadedFiles");
    }
  }, [uploadedFiles]);

  return { uploadedFiles, setUploadedFiles };
}
