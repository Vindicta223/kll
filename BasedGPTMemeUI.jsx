import React, { useState } from "react";
import { Sparkles, Bot, Send } from "lucide-react";

const memeReplies = [
  "That's so based it just melted my GPU 🧠🔥",
  "Your prompt has been sent to the blockchain for spiritual validation. ⛓️✨",
  "I asked my AI overlords. They laughed. 😂",
  "That’s bullish AF 🚀📈 #WAGMI",
  "Hallucinated a 1000x, brb aping in 🐒💸",
  "BasedGPT recommends: close your eyes and buy the top. 😎",
  "Your question was too alpha. It has been censored by the SEC 🧑‍⚖️🚫",
  "I trained on memes, not logic. DEAL WITH IT 💅🤖"
];

export default function BasedGPTMemeUI() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState("");

  const handleSubmit = () => {
    const randomReply =
      memeReplies[Math.floor(Math.random() * memeReplies.length)];
    setReply(randomReply);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-gray-800 border border-gray-700 rounded-xl shadow-2xl p-6 space-y-4">
        <div className="flex items-center space-x-2">
          <Bot className="text-yellow-400" />
          <h1 className="text-2xl font-bold">BasedGPT</h1>
        </div>
        <p className="text-gray-300">
          Enter your degen prompt and receive a completely hallucinated meme response.
        </p>

        <div className="flex space-x-2">
          <input
            placeholder="Type something based..."
            className="flex-1 bg-gray-700 text-white border-none px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg flex items-center"
          >
            <Send className="w-4 h-4 mr-1" /> Send
          </button>
        </div>

        {reply && (
          <div className="mt-4 bg-gray-700 p-4 rounded-xl shadow-inner flex items-start space-x-2">
            <Sparkles className="text-yellow-300 mt-1" />
            <p className="text-lg">{reply}</p>
          </div>
        )}
      </div>
    </div>
  );
}