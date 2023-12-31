export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6">
        <h1 className="text-6xl font-semibold drop-shadow-md text-white">
          🔐 Auth
        </h1>
        <p className="text-lg text-white">A simple Authentication service</p>
      </div>
    </main>
  );
}
