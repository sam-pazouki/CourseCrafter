import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'; 

describe("App Component", () => {
  it("renders the app and navigates to Home page", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const homeLink = screen.getByText("Home");
    fireEvent.click(homeLink);

    expect(screen.getByText("Welcome to the Home Page")).toBeInTheDocument(); // Now works with jest-dom matcher
  });
});
