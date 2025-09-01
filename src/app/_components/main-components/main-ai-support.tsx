"use client";
import { useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useUser } from "@/providers";
import { ChatMessages, Message, SendMessages } from "../support-components";
import { sendMessage } from "@/utils/requests";

export function MainAiSupport() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUser();
  const sendMessageHandler = async () => {
    if (input !== "") {
      setMessages((prev) => [
        ...prev,
        { received: false, content: input, createdAt: Date() },
      ]);
      try {
        const response = await sendMessage(input, user!);

        setInput("");
        setMessages((prev) => [
          ...prev,
          { received: true, content: response, createdAt: Date() },
        ]);
        setIsLoading(true);
        console.log(messages);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="flex h-full w-full text-white font-gip relative overflow-hidden">
      <div className="flex-1 flex flex-col relative">
        <div className="flex-1 flex flex-col h-0">
          {messages.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center relative">
              <div className="absolute bottom-[-300px] left-[-100px] w-[500px] h-[500px] pointer-events-none z-0">
                <div className="w-full h-full rounded-full opacity-50 blur-[120px]" />
              </div>
              <h1 className="text-[52px] text-white gap-3 mb-10 flex items-center justify-center text-center font-gip font-bold">
                Таны хувийн туслах
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(93.26deg, #82BCDF 11.08%, #967ADE 54.22%, #CB98E5 83.62%)",
                  }}
                >
                  HR
                </span>
              </h1>
              <div className="w-full max-w-[895px] mx-auto">
                <div className="relative w-full max-w-[895px] mx-auto mt-4">
                  <SendMessages
                    setMessages={setMessages}
                    isLoading={isLoading}
                    sendMessage={sendMessageHandler}
                    setIsLoading={setIsLoading}
                    input={input}
                    setInput={setInput}
                  />
                </div>

                <div className="flex gap-2 justify-center mt-4">
                  {[
                    "Байгууллагын үнэт зүйл",
                    "Дотоод журам",
                    "Хэдэн хүн ажилдаг вэ",
                  ].map((text) => (
                    <button
                      key={text}
                      type="button"
                      onClick={() => setInput(text)}
                      className="px-4 py-2 rounded-lg bg-[#181B2C] text-[#98A2B3] hover:bg-[#23263a] border border-[#23263a] transition-colors text-[16px] font-medium flex items-center gap-2"
                    >
                      {text}
                      <ArrowUp className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto w-full flex flex-col items-center">
              <ChatMessages
                messages={messages}
                isLoading={isLoading}
                bottomRef={bottomRef}
              />
            </div>
          )}
        </div>
        {messages.length > 0 && (
          <div className="w-full absolute left-0 bottom-0 z-10  pb-4">
            <div className="relative w-full max-w-[895px] mx-auto mt-4">
              <SendMessages
                setMessages={setMessages}
                isLoading={isLoading}
                sendMessage={sendMessageHandler}
                setIsLoading={setIsLoading}
                input={input}
                setInput={setInput}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
