type Props = {
  n: number;
  onSize: (v: number) => void;
  onRotate: () => void;
  canRotate: boolean;
};

export default function ControlBar({ n, onSize }: Props) {
  return (
    <div className="flex items-center gap-3">
      <label className="text-sm text-[var(--muted)]">Tamaño</label>
      <input
        type="number"
        min={2}
        max={12}
        value={n}
        onChange={(e) => onSize(Number(e.target.value))}
        className="h-9 w-20 text-center rounded-lg bg-[var(--bg)] text-[var(--fg)]
                   ring-1 ring-slate-700 focus:ring-2 focus:ring-[var(--accent)] outline-none transition"
      />
    </div>
  );
}
