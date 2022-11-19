import { test, vi, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

// test("should display child text", () => {
//   render(
//     <Button variant="primary" onClick={() => {}}>
//       test
//     </Button>
//   );
//   screen.getByRole("button", { name: "test" });
// });

test("should call onClick", () => {
  const onClick = vi.fn(); // Create a mock function

  render(
    <Button variant="primary" onClick={onClick}>
      test
    </Button>
  );

  fireEvent.click(screen.getByRole("button", { name: "test" }));
  expect(onClick).toHaveBeenCalled();
});
