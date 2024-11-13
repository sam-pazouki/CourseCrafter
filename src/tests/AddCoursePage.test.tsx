import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import axios from "axios";
import AddCoursePage from "../pages/AddCoursePage";
import { BrowserRouter } from "react-router-dom";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("AddCoursePage", () => {
  it("submits the form and calls addCourse API", async () => {
    mockedAxios.post.mockResolvedValueOnce({
      data: { id: "3", title: "New Course", description: "New Description", videoSize: 30, endDate: "2025-01-01" },
    });

    render(
      <BrowserRouter>
        <AddCoursePage addCourse={() => {}} />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText(/title/i), { target: { value: "New Course" } });
    fireEvent.change(screen.getByLabelText(/description/i), { target: { value: "New Description" } });
    fireEvent.change(screen.getByLabelText(/video size/i), { target: { value: "30" } });
    fireEvent.change(screen.getByLabelText(/end date/i), { target: { value: "2025-01-01" } });

    fireEvent.click(screen.getByRole("button", { name: /add course/i }));

    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledWith("http://localhost:5000/courses", {
        title: "New Course",
        description: "New Description",
        videoSize: 30,
        endDate: "2025-01-01",
      });
      expect(screen.getByText(/new course/i)).toBeInTheDocument();
    });
  });
});
