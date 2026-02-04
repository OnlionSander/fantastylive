
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIHelper: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const generateCampaignIdea = async () => {
    if (!prompt) return;
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `I need a creative name and a 2-sentence marketing slogan for a fundraising campaign for my club: "${prompt}". The club sells Belgian chocolates from Fantasty. Return a JSON with "name" and "slogan".`,
        config: {
            responseMimeType: "application/json",
        }
      });
      
      const data = JSON.parse(result.text);
      setResponse(`Campaign: ${data.name}\n\n${data.slogan}`);
    } catch (error) {
      console.error(error);
      setResponse("Sorry, my sugar levels are low. Try again later!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {isOpen ? (
        <div className="bg-white dark:bg-background-dark shadow-2xl rounded-3xl p-8 w-80 md:w-96 border-2 border-primary animate-in fade-in slide-in-from-bottom-4">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-black text-primary font-display">Campaign Idea Maker</h3>
            <button onClick={() => setIsOpen(false)} className="material-symbols-outlined hover:text-primary transition-colors">close</button>
          </div>
          
          <div className="space-y-4">
            <p className="text-sm opacity-70">Tell me your club name or type of organization:</p>
            <input 
              type="text" 
              placeholder="e.g. Blue Dolphins Swim Club"
              className="w-full p-3 rounded-xl border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button 
              onClick={generateCampaignIdea}
              disabled={loading}
              className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary-dark transition-all disabled:opacity-50"
            >
              {loading ? "Thinking..." : "Get AI Idea"}
            </button>
            
            {response && (
              <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/10 whitespace-pre-wrap font-display font-medium text-sm">
                {response}
              </div>
            )}
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-primary text-white size-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform hover:bg-primary-dark group"
        >
          <span className="material-symbols-outlined !text-3xl group-hover:animate-bounce">auto_awesome</span>
        </button>
      )}
    </div>
  );
};

export default AIHelper;
