'use client'

import { useState } from "react"


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

