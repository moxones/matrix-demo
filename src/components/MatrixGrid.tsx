type Props = {
  n: number;
  value: number[][];
  onChange: (i: number, j: number, v: number) => void;
  disabled?: boolean;
};

export default function MatrixGrid({ n, value, onChange, disabled }: Props) {
  return (
    <div className="w-full overflow-auto max-h-[70vh] rounded-xl p-2 bg-[var(--bg)]/40 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
      <div
        className="grid gap-2 justify-items-center min-w-max mx-auto"
        style={{
          gridTemplateColumns: `repeat(${n}, minmax(50px, 1fr))`,
        }}
      >
        {value.map((row, i) =>
          row.map((cell, j) => (
            <input
              key={`${i}-${j}`}
              inputMode="numeric"
              disabled={disabled}
              className="h-12 w-12 text-center rounded-lg bg-[var(--card)] text-[var(--fg)]
                         ring-1 ring-slate-700 focus:ring-2 focus:ring-[var(--accent)]
                         outline-none transition"
              value={cell}
              onChange={(e) => onChange(i, j, Number(e.target.value || 0))}
            />
          ))
        )}
      </div>
    </div>
  );
}
