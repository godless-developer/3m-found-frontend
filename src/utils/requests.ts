import { IUser, useUser } from "@/providers";
import axios from "axios";
import { toast } from "sonner";

export const getFiles = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/file`
    );
    return response.data.files;
  } catch (error) {
    console.log(error);
  }
};

export const deleteFile = async (id: string) => {
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_BASE_URL}/file`,
      {
        data: { id },
      }
    );
    if (response.data.success) {
      toast("Файлыг амжилттай устгалаа.");
    }
  } catch (error) {
    console.log(error);
    toast("Файл устгахад алдаа гарлаа.");
  }
};

export const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("name", file.name);
  formData.append("size", file.size.toString());
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/file/api/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const jsonResponse = response.json();
    toast("Файл амжилттай орууллаа.");

    return jsonResponse;
  } catch (error) {
    console.log(error);
    toast("Файл оруулахад алдаа гарлаа.");
  }
};

export const sendMessage = async (content: string, user: IUser) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/chat`,
      { content: content, user: user }
    );
    return response.data.content;
  } catch (error) {
    console.log(error);
  }
};
