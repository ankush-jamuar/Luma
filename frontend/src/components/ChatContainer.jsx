import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import ChatHeader from "./ChatHeader";
import MessagesInput from "./MessagesInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import { useAuthStore } from "../store/useAuthStore";
import { formatMessageTime } from "../lib/utils";
import { useRef } from "react";

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessage,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    getMessages(selectedUser._id);

    subscribeToMessage();

    return () => unsubscribeFromMessages();
  }, [
    selectedUser._id,
    getMessages,
    subscribeToMessage,
    unsubscribeFromMessages,
  ]);

  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (isMessagesLoading)
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
        <MessagesInput />
      </div>
    );

  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((messages) => (
          <div
            key={messages._id}
            className={`chat ${
              messages.senderId === authUser._id ? "chat-end" : "chat-start"
            }`}
            ref={messageEndRef}
          >
            <div className=" chat_image avatar">
              <div className="size-10 rounded-full border">
                <img
                  src={
                    messages.senderId === authUser._id
                      ? authUser.profilePic || "/image.png"
                      : selectedUser.profilePic || "/image.png"
                  }
                  alt="profile pic"
                />
              </div>
            </div>
            <div className="chat-header mb-1">
              <time className="text-xs opacity-50 ml-1">
                {formatMessageTime(messages.createdAt)}
              </time>
            </div>
            <div className="chat-bubble flex flex-col">
              {messages.image && (
                <img
                  className="sm:max-w-[200px] rounded-md mb-2"
                  alt="Attachment"
                  src={messages.image}
                />
              )}
              {messages.text && <p>{messages.text}</p>}
            </div>
          </div>
        ))}
      </div>
      <MessagesInput />
    </div>
  );
};

export default ChatContainer;
