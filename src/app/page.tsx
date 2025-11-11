"use client";
import MatrixGrid from "@/components/MatrixGrid";
import ControlBar from "@/components/ControlBar";
import { useMatrix } from "@/hooks/useMatrix";
import { useState } from "react";

export default function Page() {
  const { n, input, output, setCell, resize } = useMatrix(2);
  const [showOut, setShowOut] = useState(false);

  return (
    <main className="min-h-screen flex flex-col items-center justify-start px-6 py-10">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          Matrix Rotator
        </h1>
        <p className="text-[var(--muted)] text-sm">
          Ingresa una matriz NxN y rota 90° antihorario.
        </p>
      </header>

      <section className="grid gap-10 w-full max-w-5xl md:grid-cols-2">
        <div className="rounded-2xl bg-[var(--card)] p-8 shadow-lg ring-1 ring-slate-800 transition hover:ring-[var(--accent)]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Input</h2>
            <ControlBar
              n={n}
              onSize={(v) => {
                setShowOut(false);
                resize(v);
              }}
              onRotate={() => setShowOut(true)}
              canRotate={true}
            />
          </div>

          <MatrixGrid n={n} value={input} onChange={setCell} />

          <button
            onClick={() => setShowOut(true)}
            className="mt-8 w-full py-3 rounded-xl bg-[var(--accent)] text-white font-medium tracking-wide hover:opacity-90 transition"
          >
            Rotar 90°
          </button>
        </div>

        <div className="rounded-2xl bg-[var(--card)] p-8 shadow-lg ring-1 ring-slate-800 transition hover:ring-[var(--accent)]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Output</h2>
            <span className="text-xs text-[var(--muted)]">
              {showOut ? "✅ Listo" : "🔒 Bloqueado"}
            </span>
          </div>

          <div
            aria-disabled={!showOut}
            className={
              !showOut ? "pointer-events-none select-none opacity-40" : ""
            }
          >
            <MatrixGrid
              n={n}
              value={
                showOut
                  ? output
                  : Array.from({ length: n }, () =>
                      Array.from({ length: n }, () => 0)
                    )
              }
              onChange={() => {}}
              disabled
            />
          </div>
        </div>
      </section>
    </main>
  );
}
