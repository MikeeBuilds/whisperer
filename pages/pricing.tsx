import RootLayout from "@/app/layout";
import Head from "next/head";

export default function Features() {
  return (
    <div>
      <RootLayout>
        <Head>
          <title>Echo - Features</title>
        </Head>
        <main className="container mx-auto px-4 sm:px-24 py-5">
          <section className="text-center">
            <h1 className="text-4xl sm:text-6xl font-sans mb-2">Features</h1>
            <p className="text-sm sm:text-lg font-sans mb-8">Discover what Echo can do for you.</p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white bg-opacity-20 rounded-xl p-8 backdrop-blur-md">
              <h2 className="text-2xl font-bold mb-2">Feature 1</h2>
              <p>Description of Feature 1</p>
            </div>

            <div className="bg-white bg-opacity-20 rounded-xl p-8 backdrop-blur-md">
              <h2 className="text-2xl font-bold mb-2">Feature 2</h2>
              <p>Description of Feature 2</p>
            </div>

            {/* Add more features here */}
          </section>
        </main>
      </RootLayout>
    </div>
  );
}
