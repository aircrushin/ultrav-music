// components/CozeChat.js
"use client";
import { useEffect } from 'react';
const Chat = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sf-cdn.coze.com/obj/unpkg-va/flow-platform/chat-app-sdk/0.1.0-beta.2/libs/oversea/index.js';
    script.onload = () => {
      new CozeWebSDK.WebChatClient({
        config: {
          bot_id: '7363122563914432520',
        },
        componentProps: {
          title: 'GPT4o',
          lang: 'zh-CN',
          icon: '/chat.png',
          avatar: '/chat.png',
          layout: 'mobile'
        },
      });
    };
    document.body.appendChild(script);
  }, []);

  return null;
};

export default Chat;
