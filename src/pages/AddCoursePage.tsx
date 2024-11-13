import { Box, Heading, Button, VStack, FormControl, FormLabel, Input, NumberInput, NumberInputField } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Course, CourseFormData } from "../types/course";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import { pt } from "date-fns/locale";
import { useState } from "react";

registerLocale("pt-BR", pt);

interface AddCoursePageProps {
  addCourse: (newCourse: Course) => void;
}

const AddCoursePage: React.FC<AddCoursePageProps> = ({ addCourse }) => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<CourseFormData>();

  // State for startDate and endDate
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  // Set default startDate and endDate values on change
  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
    setValue("startDate", date ? date.toISOString() : "");
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
    setValue("endDate", date ? date.toISOString() : "");
  };

  const handleAddCourse: SubmitHandler<CourseFormData> = (courseData) => {
    const newCourse: Course = {
      id: new Date().toString(),
      title: courseData.title,
      description: courseData.description,
      startDate: courseData.startDate,
      endDate: courseData.endDate,
      videoSize: Number(courseData.videoSize),
      videos: [],
      name: undefined,
      category: ""
    };
    addCourse(newCourse);
    navigate("/");
  };

  return (
    <Box maxW="600px" mx="auto" mt={8} p={4}>
      <Heading as="h1" size="lg" mb={6} textAlign="center">
        Adicionar novo curso
      </Heading>
      <form onSubmit={handleSubmit(handleAddCourse)}>
        <VStack spacing={4}>
          <FormControl isInvalid={!!errors.title}>
            <FormLabel htmlFor="title">Título do curso</FormLabel>
            <Input id="title" placeholder="Insira o título do curso" {...register("title", { required: "Title is required" })} />
          </FormControl>

          <FormControl isInvalid={!!errors.description}>
            <FormLabel htmlFor="description">Descrição do curso</FormLabel>
            <Input id="description" placeholder="Insira a descrição do curso" {...register("description", { required: "Description is required" })} />
          </FormControl>

          <FormControl isInvalid={!!errors.startDate}>
            <FormLabel htmlFor="startDate">Data de início</FormLabel>
            <DatePicker
              selected={startDate}
              onChange={handleStartDateChange}
              locale="pt-BR"
              dateFormat="P"
              className="chakra-input"
            />
          </FormControl>

          <FormControl isInvalid={!!errors.endDate}>
            <FormLabel htmlFor="endDate">Data de término</FormLabel>
            <DatePicker
              selected={endDate}
              onChange={handleEndDateChange}
              locale="pt-BR"
              dateFormat="P"
              className="chakra-input"
            />
          </FormControl>

          <FormControl isInvalid={!!errors.videoSize}>
            <FormLabel htmlFor="videoSize">Tamanho total do vídeo (MB)</FormLabel>
            <NumberInput id="videoSize" min={0} defaultValue={0}>
              <NumberInputField {...register("videoSize", { required: "Video size is required" })} />
            </NumberInput>
          </FormControl>

          <Button type="submit" colorScheme="teal" size="lg" width="sm">
            Adicionar curso
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default AddCoursePage;
