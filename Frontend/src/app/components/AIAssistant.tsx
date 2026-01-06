import { useState } from "react";

export default function AIAssistant() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi 🌱 I’m your Plant Assistant. Ask me anything about plant care!"
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSend() {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // TEMP: mock AI reply (replace later with backend)
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          content:
            "That’s a great question! 🌿 For now, I suggest checking light and watering needs. If the issue persists, consider talking to an expert."
        }
      ]);
      setLoading(false);
    }, 1000);
  }

  return (
    <div className="bg-white border rounded-xl p-5 shadow-sm">
      <h2 className="text-lg font-semibold mb-3">
        AI Plant Assistant 🤖🌱
      </h2>

      <div className="h-56 overflow-y-auto space-y-3 mb-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-[80%] p-3 rounded-lg text-sm ${
              msg.role === "assistant"
                ? "bg-emerald-50 text-left"
                : "bg-emerald-600 text-white ml-auto"
            }`}
          >
            {msg.content}
          </div>
        ))}
        {loading && (
          <p className="text-sm text-muted-foreground">Thinking…</p>
        )}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask about watering, sunlight, pests..."
          className="flex-1 border rounded-lg px-3 py-2 text-sm"
        />
        <button
          onClick={handleSend}
          className="bg-emerald-600 text-white px-4 rounded-lg text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
}
