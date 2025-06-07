"use client";
import { useEffect, useState } from "react";
import { HomePresenter } from "./presenter/HomePresenter";

export default function HomePage() {
  const [message, setMessage] = useState("");
  const [presenter, setPresenter] = useState(null);

  useEffect(() => {
    const p = new HomePresenter({ setMessage });
    p.loadData();
    setPresenter(p);
  }, []);

  return (
    <main className="flex min-h-screen h-[1500px] bg-black  flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold">LearnNextJS</h1>
      <p className="mt-4 text-xl">{message}</p>
      <button className="mt-6 px-6 py-2 bg-white text-black rounded hover:bg-gray-300 transition" onClick={() => presenter?.updateMessage()}>
        Ganti Pesan
      </button>
    </main>
  );
}
