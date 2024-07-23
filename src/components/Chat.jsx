import React, { useState } from 'react'
import InputForm from './InputForm'
import Generator from './Generator'
import { GoogleGenerativeAI } from "@google/generative-ai";

const Chat = () => {
  const [prompt, setPrompt] = useState();
  const [result, setResult] = useState('Let&apos;s get Cooking!');
  // console.log(apiKey) // CAUTION: This is not secure!


  const generateRecipe = async (prompt) => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    // const test = "Write a story about a magic backpack. in 10 words";

    try {
      const response = await model.generateContent(prompt);
      if (response)
        setResult(response.response.candidates[0].content.parts[0].text);
      // console.log(response.response.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error("Error generating recipe:", error);
    }
  };

  return (
    <div className='flex gap-5 h-screen items-center justify-between p-5 bg-green-100'>
      <InputForm generateRecipe={generateRecipe} />
      <Generator result={result} />
    </div>
  )
}

export default Chat