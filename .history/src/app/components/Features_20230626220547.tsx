import Head from "next/head";

export default function Pricing() {
  return (
    <div>
      <Head>
        <title>Echo - Pricing</title>
      </Head>
      <main className="container mx-auto px-4 sm:px-24 py-5">
        <section className="text-center">
          <h1 className="text-4xl sm:text-6xl font-sans mb-2">Pricing</h1>
          <p className="text-sm sm:text-lg font-sans mb-8">Choose the plan thats right for you.</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white bg-opacity-20 rounded-xl p-8 backdrop-blur-md">
            <h2 className="text-2xl font-bold mb-2">Basic Plan</h2>
            <p>$10/month</p>
            <ul className="list-disc list-inside">
              <li> 1</li>
              <li>COming Soon...</li>
            </ul>
          </div>

          <div className="bg-white bg-opacity-20 rounded-xl p-8 backdrop-blur-md">
            <h2 className="text-2xl font-bold mb-2">Premium Plan</h2>
            <p>$20/month</p>
            <ul className="list-disc list-inside">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div>

          <div className="bg-white bg-opacity-20 rounded-xl p-8 backdrop-blur-md">
            <h2 className="text-2xl font-bold mb-2">Pro Plan</h2>
            <p>$30/month</p>
            <ul className="list-disc list-inside">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
