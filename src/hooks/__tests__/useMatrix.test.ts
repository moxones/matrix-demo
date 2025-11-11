import { renderHook, act } from "@testing-library/react";
import { useMatrix } from "@/hooks/useMatrix";

describe("useMatrix hook", () => {
  it("genera matriz inicial NxN", () => {
    const { result } = renderHook(() => useMatrix(3));
    expect(result.current.input.length).toBe(3);
    expect(result.current.input[0].length).toBe(3);
  });

  it("rota matriz correctamente 90° antihorario", () => {
    const { result } = renderHook(() => useMatrix(2));
    act(() => {
      result.current.setCell(0, 0, 1);
      result.current.setCell(0, 1, 2);
      result.current.setCell(1, 0, 3);
      result.current.setCell(1, 1, 4);
    });

    const out = result.current.output;
    expect(out).toEqual([
      [2, 4],
      [1, 3],
    ]);
  });

  it("resetea la matriz al cambiar tamaño", () => {
    const { result } = renderHook(() => useMatrix(2));
    act(() => result.current.resize(4));
    expect(result.current.input.length).toBe(4);
    expect(result.current.input[0].length).toBe(4);
  });
});
