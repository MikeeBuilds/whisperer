'use client'

import { useState } from "react"
import Head from "next/head";

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
    <div>
      <Head>
        <title>Echo - Audio to Text Transcription</title>
      </Head>
      <main className="container mx-auto px-4 sm:px-24 py-5">
        <section className="text-center">
          <h1 className="text-4xl sm:text-6xl font-sans mb-2">Echo 🔊</h1>
          <h4 className="text-xl">
            <span>Built By Algo Hussle</span>
          </h4>
          <p className="text-sm sm:text-lg font-sans mb-8">Select an audio file and Upload to transcribe audio to text.</p>
        </section>

        <section className="flex flex-col items-center bg-gray-700 rounded-xl p-8 backdrop-blur-md bg-opacity-60">
          <input type="file" accept=".wav, .mp3" onChange={handleFileChange} className="mb-4 p-2" />
          <button
            onClick={callGetTranscription}
            className="w-max bg-white bg-opacity-20 px-4 py-2 rounded-sm hover:bg-opacity-30 transition-colors duration-200 backdrop-blur-md"
          >
            Upload
          </button>
          <div className="mt-4 w-full h-max border-2 break-words p-4 bg-white bg-opacity-20 rounded-md backdrop-blur-md">
            {isLoading ? "Loading..." : response ? response : ""}
          </div>
        </section>

        <section id="about" className="mt-10 bg-white bg-opacity-20 rounded-xl p-8 backdrop-blur-md">
          <h2 className="text-2xl font-bold mb-2">About Us</h2>
          <p>Echo is a cutting-edge audio to text transcription service. Our mission is to make transcription easy, fast, and affordable for everyone. We use advanced AI technology to provide accurate transcriptions in minutes.</p>
        </section>

        <section id="services" className="mt-10 bg-white bg-opacity-20 rounded-xl p-8 backdrop-blur-md">
          <```jsx
h2 className="text-2xl font-bold mb-2">Our Services</h2>
          <p>We offer a range of transcription services to suit your needs. Whether you're a journalist needing an interview transcribed, a student wanting to convert lecture recordings into notes, or a business requiring transcription for meetings, we've got you covered.</p>
        </section>

        <section id="contact" className="mt-10 bg-white bg-opacity-20 rounded-xl p-8 backdrop-blur-md">
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <p>If you have any questions or need assistance, please don't hesitate to contact us. You can reach us at support@echo.com or call us at (123) 456-7890. We're here to help!</p>
        </section>
      </main>
    </div>
  );
}
