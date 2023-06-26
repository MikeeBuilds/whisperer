'use client'

import { useState } from "react"
import Features from './components/Features';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Layout from './layout';
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
    <Layout>
      <Head>
        <title>Echo - Audio to Text Transcription</title>
      </Head>
      <main className="p-6">
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">Transcribe Audio to Text</h2>
          <p>Select an audio file and upload to transcribe audio to text.</p>
          <div className="mt-4">
            <input type="file" accept=".wav, .mp3" onChange={handleFileChange} className="mb-4 p-2" />
            <button
              onClick={callGetTranscription}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
            >
              Upload
            </button>
            <div className="mt-4">
              {isLoading ? "Loading..." : response ? response : ""}
            </div>
          </div>
        </section>
        <Features />
        <Pricing />
        <Contact />
      </main>
    </Layout>
  );
}
