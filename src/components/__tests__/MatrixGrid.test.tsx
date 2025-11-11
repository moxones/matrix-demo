import { render, screen, fireEvent } from "@testing-library/react";
import MatrixGrid from "@/components/MatrixGrid";

describe("MatrixGrid", () => {
  it("renderiza todos los inputs según tamaño n", () => {
    render(
      <MatrixGrid
        n={2}
        value={[
          [1, 2],
          [3, 4],
        ]}
        onChange={() => {}}
      />
    );
    const inputs = screen.getAllByRole("textbox");
    expect(inputs).toHaveLength(4);
  });

  it("detecta cambios en las celdas", () => {
    const handleChange = jest.fn();

    render(<MatrixGrid n={1} value={[[5]]} onChange={handleChange} />);
    const input = screen.getByDisplayValue("5");
    fireEvent.change(input, { target: { value: "9" } });
    expect(handleChange).toHaveBeenCalled();
  });
});
