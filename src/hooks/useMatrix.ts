import { useMemo, useState } from "react";

export function useMatrix(sizeInit = 2) {
  const [n, setN] = useState<number>(sizeInit);
  const [input, setInput] = useState<number[][]>(
    Array.from({ length: sizeInit }, () =>
      Array.from({ length: sizeInit }, () => 0)
    )
  );
  const output = useMemo<number[][]>(
    () =>
      Array.from({ length: n }, (_, i) =>
        Array.from({ length: n }, (_, j) => input[j]?.[n - 1 - i] ?? 0)
      ),
    [input, n]
  );

  const setCell = (i: number, j: number, v: number) => {
    setInput((m) =>
      m.map((row, ri) => row.map((col, cj) => (ri === i && cj === j ? v : col)))
    );
  };

  const resize = (next: number) => {
    const s = Math.max(2, Math.min(next, 12));
    setN(s);
    setInput(
      Array.from({ length: s }, () => Array.from({ length: s }, () => 0))
    );
  };

  return { n, input, output, setCell, resize };
}
