import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import axios from "axios";
import HomePage from "../pages/HomePage";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'; 

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("HomePage", () => {
  const mockCourses = [
    { id: "1", title: "Course 1", description: "Description 1", videoSize: 50, endDate: "2024-12-01", videos: [], category: "Category 1", name: "Course 1 Name" },
    { id: "2", title: "Course 2", description: "Description 2", videoSize: 75, endDate: "2024-12-15", videos: [], category: "Category 2", name: "Course 2 Name" },
  ];

  it("fetches and displays courses on load", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: mockCourses });

    render(
      <BrowserRouter>
        <HomePage courses={[]} setCourses={() => { }} searchQuery={""} selectedCategory={""} onSearch={() => { }} />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Course 1")).toBeInTheDocument();
      expect(screen.getByText("Course 2")).toBeInTheDocument();
    });
  });

  it("calls delete API and updates UI when delete button is clicked", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: mockCourses });
    mockedAxios.delete.mockResolvedValueOnce({});

    render(
      <BrowserRouter>
        <HomePage courses={mockCourses} setCourses={() => { } } searchQuery={""} selectedCategory={""} onSearch={function (query: string, category?: string): void {
          throw new Error("Function not implemented.");
        } } />
      </BrowserRouter>
    );

    const deleteButton = screen.getAllByText("Delete")[0];
    fireEvent.click(deleteButton);

    await waitFor(() => {
      expect(mockedAxios.delete).toHaveBeenCalledWith("http://localhost:5000/courses/1");
      expect(screen.queryByText("Course 1")).not.toBeInTheDocument();
    });
  });
});
