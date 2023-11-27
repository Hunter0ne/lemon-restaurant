import { render, screen } from "@testing-library/react";
import Reservation from "./Pages/Reservations";

test("Renders the Reservation Form heading", () => {
  render(<Reservation />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
