'use client'

import { useState } from "react"
import Features from './components/Features';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

export default function Home() {
  const [theFile, setTheFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if (!file) return;

    setTheFile(file);
  };

  const callGetTranscription = async () => {
    setIsLoading(true);

    if (!theFile) {
      // Handle the case when no file is selected
      setIsLoading(false);
      return;
    }

    const formData = new FormData();
    formData.set("file", theFile);

    try {
      const response = await fetch("/api", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Handle the success response
        console.log("File uploaded successfully");
      } else {
        // Handle the error response
        console.error("Failed to upload file");
      }

      const data = await response.json();

      setResponse(data.output.text);
    } catch (error) {
      // Handle any errors
      console.error("An error occurred while uploading the file", error);
    }

    setTheFile(null);
    setIsLoading(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-24 py-5">
      <h1 className="text-6xl font-sans mb-2 text-white">Echo</h1>
      <p className="text-lg font-sans mb-8 text-white">Select an audio file and click Upload to transcribe the audio to text.</p>

      <Features />
      <Pricing 
        tiers={[

          
      />
      <Contact />

      <div className="flex h-[35rem] w-[40rem] flex-col items-center bg-gray-700 rounded-xl p-8 backdrop-blur-md bg-opacity-60">
        <div className="h-full flex flex-col gap-4 overflow-y-auto w-full">
          <input type="file" accept=".wav, .mp3" onChange={handleFileChange} className="mb-4 p-2" />

          <div className="w-full h-max border-2 break-words p-4 bg-white bg-opacity-20 rounded-md backdrop-blur-md">
            {isLoading ? "Loading..." : response ? response : ""}
          </div>
        </div>
        <div className="w-full mt-4 flex justify-center">
          <button
            onClick={callGetTranscription}
            className="w-max bg-white bg-opacity-20 px-4 py-2 rounded-sm hover:bg-opacity-30 transition-colors duration-200 backdrop-blur-md"
          >
            Upload
          </button>
        </div>
      </div>
    </main>
  );
}