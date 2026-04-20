"use client";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { generateSessionId } from "@/lib/utils";
import type { Message, ChatbotDomain } from "@/types";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [domain, setDomain] = useState<ChatbotDomain>("GENERAL");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId] = useState(generateSessionId);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg: Message = {
      id: Date.now().toString(),
      content: input,
      author: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, domain, sessionId }),
      });
      const data = await res.json();
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        content: data.reply || "Je n'ai pas pu répondre.",
        author: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          content: "Désolé, une erreur est survenue.",
          author: "bot",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const domainLabels: Record<ChatbotDomain, string> = {
    AGRICULTURE: "Agriculture",
    FOOTBALL: "Football",
    GENERAL: "Général",
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-80 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-xl">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
            <div className="w-2 h-2 rounded-full bg-[#1D9E75]" />
            <span className="text-sm font-medium text-gray-900 flex-1">
              Assistant Zaro Tech
            </span>
            <button onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors">
              <X size={16} />
            </button>
          </div>

          <div className="flex gap-2 px-4 py-2 border-b border-gray-50">
            {(Object.keys(domainLabels) as ChatbotDomain[]).map((d) => (
              <button key={d} onClick={() => setDomain(d)}
                className={`text-xs px-2.5 py-1 rounded-full transition-colors ${
                  domain === d
                    ? "bg-[#1D9E75] text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}>
                {domainLabels[d]}
              </button>
            ))}
          </div>

          <div className="h-64 overflow-y-auto p-4 flex flex-col gap-3">
            {messages.length === 0 && (
              <p className="text-xs text-gray-400 text-center mt-10">
                Bonjour ! Comment puis-je vous aider ?
              </p>
            )}
            {messages.map((m) => (
              <div key={m.id}
                className={`text-sm px-3 py-2 rounded-xl max-w-[85%] leading-relaxed ${
                  m.author === "user"
                    ? "self-end bg-[#1D9E75] text-white"
                    : "self-start bg-gray-100 text-gray-800"
                }`}>
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="self-start bg-gray-100 text-gray-400 text-sm px-3 py-2 rounded-xl">
                <span className="animate-pulse">...</span>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="flex gap-2 px-4 py-3 border-t border-gray-100">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              className="flex-1 bg-gray-50 text-sm px-3 py-2 rounded-lg outline-none placeholder:text-gray-400"
              placeholder="Votre message..."
              disabled={loading}
            />
            <button onClick={send}
              disabled={loading || !input.trim()}
              className="bg-[#1D9E75] text-white p-2 rounded-lg hover:bg-[#0F6E56] transition-colors disabled:opacity-50">
              <Send size={14} />
            </button>
          </div>
        </div>
      )}

      <button onClick={() => setOpen(!open)}
        className="bg-[#1D9E75] text-white p-4 rounded-full shadow-lg hover:bg-[#0F6E56] transition-colors">
        {open ? <X size={20} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}