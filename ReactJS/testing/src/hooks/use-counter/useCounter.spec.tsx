import { act, renderHook } from "@testing-library/react";
import useCounter from "./useCounter";

describe("useCountere", () => {
  it("should render with default initialCount i.e, 0", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  it("should render count with initial count is passed", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    });
    expect(result.current.count).toBe(10);
  });

  it("should update count when incremented", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.incrementCount());
    expect(result.current.count).toBe(1);
  });

  it("should update count when decremented", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.decrementCount());
    expect(result.current.count).toBe(-1);
  });
});
