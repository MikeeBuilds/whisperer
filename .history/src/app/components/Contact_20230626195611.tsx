import Head from "next/head";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Echo - Contact Us</title>
      </Head>
      <main className="container mx-auto px-4 sm:px-24 py-5">
        <section className="text-center">
          <h1 className="text-4xl sm:text-6xl font-sans mb-2">Contact Us</h1>
          <p className="text-sm sm:text-lg font-sans mb-8">Were here to help! If you have any questions about our services or need assistance with our app, please don't hesitate to reach out.</p>
        </section>

        <section className="bg-white bg-opacity-20 rounded-xl p-8 backdrop-blur-md">
          <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
          <ul className="list-none text-blue-800">
            <li><strong>Email:</strong> support@echo.com</li>
            <li><strong>Phone:</strong> (123) 456-7890</li>
            <li><strong>Address:</strong> 123 Echo Street, Transcription City, 12345</li>
          </ul>
          <p className="text-blue-800 mt-4">Our support team is available Monday to Friday, from 9:00 AM to 5:00 PM EST. We strive to respond to all inquiries within 24 hours.</p>
        </section>
      </main>
    </div>
  );
}
