import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders OTT streaming app", () => {
  render(<App />);
  // The app renders the StreamVault OTT platform
  const appEl = document.querySelector(".ott-app");
  expect(appEl).toBeInTheDocument();
});
