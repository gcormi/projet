
import { GoogleGenAI, GenerateContentResponse, Chat } from "@google/genai";

// Ensure API_KEY is available in the environment.
// IMPORTANT: DO NOT handle API key input in the UI. This is a backend/environment concern.
const apiKey = process.env.API_KEY;
if (!apiKey) {
  console.error("API_KEY for Gemini is not set in environment variables.");
  // In a real application, you might throw an error or have a fallback,
  // but for this educational module, we'll allow it to proceed
  // as the Gemini API might not be actively used by the frontend directly.
}

const ai = new GoogleGenAI({ apiKey: apiKey || "YOUR_API_KEY_PLACEHOLDER" }); // Use placeholder if not set

const TEXT_MODEL = 'gemini-2.5-flash-preview-04-17';
const IMAGE_MODEL = 'imagen-3.0-generate-002';

/**
 * Generates content based on a text prompt.
 */
export const generateText = async (prompt: string): Promise<string> => {
  if (!apiKey) return "API Key not configured. Cannot query Gemini.";
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: TEXT_MODEL,
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating text with Gemini:", error);
    return "Erreur lors de la génération de texte. Veuillez vérifier la console.";
  }
};

/**
 * Generates images based on a prompt.
 * Returns an array of base64 encoded image strings.
 */
export const generateImagesFromPrompt = async (prompt: string, numberOfImages: number = 1): Promise<string[]> => {
  if (!apiKey) return ["API Key not configured. Cannot query Gemini."];
  try {
    const response = await ai.models.generateImages({
      model: IMAGE_MODEL,
      prompt: prompt,
      config: { numberOfImages: numberOfImages, outputMimeType: 'image/jpeg' },
    });
    return response.generatedImages.map(img => `data:image/jpeg;base64,${img.image.imageBytes}`);
  } catch (error) {
    console.error("Error generating images with Gemini:", error);
    return ["Erreur lors de la génération d'images."];
  }
};

/**
 * Creates a new chat session.
 */
export const createChat = (systemInstruction?: string): Chat => {
   if (!apiKey) {
    // Return a mock chat object or throw error if API key is essential for chat creation
    console.warn("API Key not configured. Chat will be non-functional.");
    // This is a simplified mock. A real app would need more robust handling.
    return {
        sendMessage: async () => ({ text: "Chat non disponible (API Key manquante)." } as GenerateContentResponse),
        sendMessageStream: async function*() { yield { text: "Chat non disponible (API Key manquante)." } as GenerateContentResponse; },
        // history: [] // Add history if Chat type requires it
    } as unknown as Chat; // Cast to Chat, acknowledge it's a mock
  }
  return ai.chats.create({
    model: TEXT_MODEL,
    config: {
      systemInstruction: systemInstruction,
    },
  });
};

// Example of how to handle JSON response (not directly used by current app UI)
export const getStructuredData = async <T,>(prompt: string, systemInstruction?: string): Promise<T | null> => {
  if (!apiKey) {
    console.error("API Key not configured.");
    return null;
  }
  try {
    const response = await ai.models.generateContent({
      model: TEXT_MODEL,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        systemInstruction: systemInstruction
      }
    });

    let jsonStr = response.text.trim();
    const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
    const match = jsonStr.match(fenceRegex);
    if (match && match[2]) {
      jsonStr = match[2].trim();
    }
    
    return JSON.parse(jsonStr) as T;

  } catch (error) {
    console.error("Failed to get structured data from Gemini:", error);
    return null;
  }
};

// This service is a placeholder as per general instructions.
// The current application (educational module) does not actively use these functions
// to generate its content dynamically, but they are available for future extensions.
