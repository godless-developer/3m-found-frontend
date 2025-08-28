// Utility: filename truncate
export const truncateFileName = (name: string, maxLength = 20) => {
  if (name.length <= maxLength) return name;
  const ext = name.split(".").pop(); // өргөтгөл
  const base = name.substring(0, maxLength - (ext?.length ?? 0) - 3);
  return `${base}...${ext}`;
};
