import { render, fireEvent,screen } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
  it("counter displays correct initial count", () => {
    render(<Counter initialCount={5} />);
    const countValue = Number(screen.getByTestId("count").textContent);
    expect(countValue).toEqual(5);
  });

  it("count should increment by 1 if the increment button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={15} />);
    const incrementBttn = getByRole("button", { name: "Increment" });
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(15);
    fireEvent.click(incrementBttn);
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toEqual(16);
  });

  it("count should decrement by 1 if the decrement button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const decrementBttn = getByRole("button", { name: "Decrement" });
    expect(Number(getByTestId("count").textContent)).toEqual(0);
    fireEvent.click(decrementBttn);
    expect(Number(getByTestId("count").textContent)).toEqual(-1);
  });

  it("count should be 0 if the restart button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={51} />);
    const restartBttn = getByRole("button", { name: "Restart" });
    expect(Number(getByTestId("count").textContent)).toEqual(51);
    fireEvent.click(restartBttn);
    expect(Number(getByTestId("count").textContent)).toEqual(0);
  });

  it("count should invert signs if the switch signs button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={-121} />);
    const switchBttn = getByRole("button", { name: "Switch Signs" });
    expect(Number(getByTestId("count").textContent)).toEqual(-121);
    fireEvent.click(switchBttn);
    expect(Number(getByTestId("count").textContent)).toEqual(121);
  });
});

