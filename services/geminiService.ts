import { GoogleGenAI } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Helper to convert file/blob to base64
export const fileToGenerativePart = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      // Remove the data URL prefix (e.g., "data:image/jpeg;base64,")
      const base64Data = base64String.split(',')[1];
      resolve(base64Data);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

// 1. Edit Image (Nano Banana / gemini-2.5-flash-image)
export const editImageWithAI = async (imageBase64: string, prompt: string, mimeType: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: imageBase64,
              mimeType: mimeType,
            },
          },
          {
            text: prompt,
          },
        ],
      },
    });

    // Check for image output first
    for (const part of response.candidates?.[0]?.content?.parts || []) {
       if (part.inlineData) {
         return `data:image/png;base64,${part.inlineData.data}`;
       }
    }
    // Fallback to text if no image
    return null;
  } catch (error) {
    console.error("Error editing image:", error);
    throw error;
  }
};

// 2. Analyze Image (gemini-3-pro-preview)
export const analyzeImageWithAI = async (imageBase64: string, prompt: string, mimeType: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: {
        parts: [
          {
            inlineData: {
              data: imageBase64,
              mimeType: mimeType,
            },
          },
          { text: prompt }
        ]
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error analyzing image:", error);
    throw error;
  }
};

// 3. Strategic Thinking (gemini-3-pro-preview with Thinking Budget)
export const generateStrategyWithThinking = async (prompt: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 32768 }, // Max budget
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error generating strategy:", error);
    throw error;
  }
};

// 4. Trend Search (Search Grounding with gemini-2.5-flash)
export const searchTrends = async (query: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Find the latest trends and stats for: ${query}. Provide a concise summary for a video editor.`,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });
    
    const text = response.text;
    const grounding = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    
    return { text, grounding };
  } catch (error) {
    console.error("Error searching trends:", error);
    throw error;
  }
};