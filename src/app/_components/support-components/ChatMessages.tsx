import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Blob from "./Blob";
import styles from "./Assistant.module.css";
import { Message } from "./message-input";
import { useUser } from "@/providers";

type ChatMessagesProps = {
  messages: Message[];
  isLoading: boolean;
  bottomRef: React.RefObject<HTMLDivElement>;
};

export const ChatMessages: React.FC<ChatMessagesProps> = ({
  messages,
  isLoading,
  bottomRef,
}) => {
  const { user } = useUser();
  const groupedMessages = messages.reduce((groups, msg) => {
    const date = new Date(msg.createdAt!);
    const dateKey = date.toDateString();

    if (!groups[dateKey]) groups[dateKey] = [];
    groups[dateKey].push(msg);
    return groups;
  }, {} as Record<string, typeof messages>);

  const formatDate = (dateString: string, firstMsgTimestamp: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const time = formatTime(firstMsgTimestamp);

    if (date.toDateString() === today.toDateString()) {
      return `Өнөөдөр, ${time}`;
    } else if (date.toDateString() === yesterday.toDateString()) {
      return `Өчигдөр, ${time}`;
    } else {
      return (
        date.toLocaleDateString("mn-MN", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }) + `, ${time}`
      );
    }
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    if (isNaN(date.getTime())) return "";
    return date.toLocaleTimeString("mn-MN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <div className="w-full max-w-[895px] mx-auto flex flex-col gap-4 px-2 font-gip  mb-[200px]">
      {Object.entries(groupedMessages).map(([dateKey, dayMessages]) => (
        <div key={dateKey}>
          <div className="flex items-center justify-center my-4">
            <div className="flex-1 h-px bg-[#34405466]" />
            <span className="px-4 text-lg text-[#C8CBCF] font-medium">
              {formatDate(dayMessages[0].createdAt!, dayMessages[0].createdAt!)}
            </span>
            <div className="flex-1 h-px bg-[#34405466]" />
          </div>

          {dayMessages.map((msg, idx) => {
            const isAI = msg.received;
            const prevIsAI = idx > 0 ? dayMessages[idx - 1].received : false;
            const marginClass = isAI && !prevIsAI ? "my-[50px]" : "";
            return (
              <div
                key={idx}
                className={`flex gap-5 w-full max-w-full ${marginClass}`}
              >
                <div className="relative max-w-[879px] w-full">
                  {isAI ? (
                    <div className="flex gap-4 p-4 rounded-xl border border-[#344054B3] bg-[#1B202FB2] text-[#98A2B3] max-w-[879px] w-full">
                      <div className="shrink-0">
                        <Blob />
                      </div>
                      <div className="flex flex-col max-w-[827px] w-full">
                        <div className="flex items-center justify-between w-full">
                          <span
                            className="bg-clip-text text-transparent text-xl font-bold"
                            style={{
                              backgroundImage:
                                "linear-gradient(93.26deg, #82BCDF 11.08%, #967ADE 54.22%, #CB98E5 83.62%)",
                            }}
                          >
                            HR
                          </span>
                        </div>
                        <div className="text-xl whitespace-pre-wrap break-all font-normal mt-1">
                          {msg.content}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex-row-reverse flex gap-4  items-center max-w-[879px] w-full">
                      <div className="shrink-0">
                        <Blob />
                      </div>
                      <div className="flex flex-col max-w-[827px] w-full">
                        <div className="flex flex-row-reverse items-center justify-between w-full">
                          <span className="text-[#C8CBCF] text-xl font-semibold">
                            {user?.first_name}
                          </span>
                        </div>
                        <div className="text-xl w-full flex justify-end whitespace-pre-wrap break-all font-normal text-[#D0D5DD] mt-1">
                          {msg.content}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ))}

      {isLoading && (
        <div className="flex gap-3 self-start items-start max-w-[80%]">
          <div className="bg-[#1f2937] text-white px-4 py-2 rounded-xl text-sm flex items-center gap-2 ml-16 mt-[50px]">
            <span className={styles.typing}>
              <span className={styles["typing-dot"]}></span>
              <span className={styles["typing-dot"]}></span>
              <span className={styles["typing-dot"]}></span>
            </span>
          </div>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
};
