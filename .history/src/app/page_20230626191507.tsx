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
          <h1 className="text-blue-600 text-4xl sm:text-6xl font-sans mb-2">Echo 🔊</h1>
          <h4 className="text-xl text-blue-800">
            <span>Built By Algo Hussle</span>
          </h4>
          <p className="text-sm sm:text-lg font-sans mb-8 text-blue-800">Select an audio file and Upload to transcribe audio to text.</p>
        </section>

        <section className="flex flex-col items-center bg-gray-700 rounded-xl p-8 backdrop-blur-md bg-opacity-30">
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

        <section id="about" className="mt-10 bg-white bg-opacity-30 rounded-xl p-8 backdrop-blur-md">
          <h2 className="text-2xl font-bold mb-2 text-blue-800">About Us</h2>
          <p className="text-blue-800">Echo is a leading provider of audio-to-text transcription services. We leverage the power of advanced AI technology to deliver fast, accurate transcriptions. Our goal is to simplify the transcription process and provide a valuable service to professionals, students, and anyone in need of high-quality transcriptions. Whether you're a journalist, a researcher, or a student, Echo is here to make your life easier.</p>
        </section>

        <section id="services" className="mt-10 bg-white bg-opacity-30 rounded-xl p-8 backdrop-blur-md">
          <h2 className="text-blue-800 text-2xl font-bold mb-2">Our Services</h2>
          <p className="text-blue-800">
  At Echo, we offer a wide range of transcription services tailored to meet your specific needs. Our services include:
</p>
<br/>
<ul className="list-disc list-inside text-blue-800">
  <li><span className="text-bold">Audio Transcription:</span> We convert audio files into written text with high accuracy. This service is perfect for transcribing interviews, podcasts, lectures, and more.</li>
  <li>Video Transcription: We transcribe the audio from your videos, making it easy to create subtitles or closed captions.</li>
  <li>Real-Time Transcription: Need transcription services in real time? We've got you covered. This service is ideal for live events, webinars, and conferences.</li>
  <li>Multi-Language Transcription: Our advanced AI technology can transcribe audio in multiple languages.</li>
  <li>Custom Transcription: Have specific transcription needs? Contact us and we'll work with you to provide a customized solution.</li>
</ul>

        </section>

        <section id="contact" className="mt-10 bg-white bg-opacity-30 rounded-xl p-8 backdrop-blur-md">
          <h2 className="text-2xl font-bold mb-2 text-blue-800">Contact Us</h2>
          <p className="text-blue-800">Information on how to contact your company...</p>
        </section>
      </main>
    </div>
  );
}
