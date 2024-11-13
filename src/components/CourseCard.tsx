import { Box, Text, Button, Flex } from "@chakra-ui/react";
import React from "react";

// Define the expected props for the CourseCard component
interface CourseCardProps {
  title: string;
  description: string;
  videoSize: number;
}

// Functional component for displaying individual course details
const CourseCard: React.FC<CourseCardProps> = ({ title, description, videoSize }) => (
  <Box
    bg="white"
    boxShadow="lg"
    borderRadius="lg"
    p={6}
    _hover={{ transform: "scale(1.02)", boxShadow: "xl" }} 
    transition="all 0.2s ease-in-out"
  >
    <Text fontSize="2xl" fontWeight="bold" color="primary.500" mb={2}>
      {title}
    </Text>
    <Text fontSize="md" color="gray.700" mb={4}>
      {description}
    </Text>
    <Flex justifyContent="space-between" mt={4}>
      <Button colorScheme="primary" size="sm" variant="outline">
      Editar
      </Button>
      <Button colorScheme="red" size="sm" variant="outline">
      Excluir
      </Button>
    </Flex>
    <Text fontSize="sm" color="gray.500" mt={3}>
      Video Size: {videoSize} MB
    </Text>
  </Box>
);

export default CourseCard;
