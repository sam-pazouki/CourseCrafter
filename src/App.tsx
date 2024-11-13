import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import theme from "./styles/theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AddCoursePage from "./pages/AddCoursePage";
import { useState, useEffect } from "react";
import { Course } from "./types/course";
import axios from 'axios';

function App() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  // Fetch courses on initial load
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/courses');
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  // Function to add a course
  const addCourse = async (newCourse: Course) => {
    try {
      const response = await axios.post('http://localhost:5000/courses', newCourse);
      setCourses((prevCourses) => [...prevCourses, response.data]);
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  // Handle search query change
  const handleSearch = (query: string, category?: string) => {
    setSearchQuery(query);
    if (category) {
      setSelectedCategory(category);
    }
  };

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Header 
          onSearch={handleSearch} 
          onCategoryChange={handleCategoryChange} 
        />
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                courses={courses}
                setCourses={setCourses}
                searchQuery={searchQuery}
                selectedCategory={selectedCategory}
                onSearch={handleSearch} 
              />
            } 
          />
          <Route path="/add-course" element={<AddCoursePage addCourse={addCourse} />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
