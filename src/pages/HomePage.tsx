import React, { useState, useRef } from 'react';
import axios from 'axios';
import {
  Box, Grid, Text, Button, Badge, VStack, Modal, ModalOverlay, ModalContent,
  ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input, InputGroup, InputRightElement, FormLabel, useDisclosure, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter
} from '@chakra-ui/react';
import { Course } from '../types/course';
import { SearchIcon } from '@chakra-ui/icons';

interface HomePageProps {
  courses: Course[];
  setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
  searchQuery: string;
  selectedCategory: string;
  onSearch: (query: string, category?: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ courses, setCourses, searchQuery, selectedCategory, onSearch }) => {
  const [currentCourse, setCurrentCourse] = useState<Course | null>(null);
  const [courseToDelete, setCourseToDelete] = useState<string | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);

  const handleDelete = async () => {
    if (!courseToDelete) return;

    try {
      await axios.delete(`http://localhost:5000/courses/${courseToDelete}`);
      setCourses((prevCourses) => prevCourses.filter((course) => course.id !== courseToDelete));
      setCourseToDelete(null);
      onDeleteClose();
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  const handleEditClick = (course: Course) => {
    setCurrentCourse({ ...course });
    onOpen();
  };

  const handleSaveChanges = async () => {
    if (!currentCourse) return;
    try {
      await axios.put(`http://localhost:5000/courses/${currentCourse.id}`, currentCourse);
      setCourses((prevCourses) =>
        prevCourses.map((course) => (course.id === currentCourse.id ? currentCourse : course))
      );
      setCurrentCourse(null);
      onClose();
    } catch (error) {
      console.error('Error saving course:', error);
    }
  };

  const handleCancelEdit = () => {
    setCurrentCourse(null);
    onClose();
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value, selectedCategory);
  };

  // Filter courses based on end date, search query, and selected category
  const filteredCourses = courses.filter(course =>
    new Date(course.endDate) >= new Date() &&
    (course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedCategory ? course.category === selectedCategory : true)
  );

  return (
    <Box padding="4" bgGradient="linear(to-r, teal.50, blue.50)" minH="100vh">
      <Text fontSize="3xl" fontWeight="bold" mb="6" textAlign="center" color="teal.700">
        Cursos Ativos
      </Text>

      <InputGroup mb="6" maxW="lg" mx="auto" boxShadow="sm">
        <Input
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Pesquisar curso..."
          size="md"
          borderRadius="full"
          borderColor="teal.300"
          _hover={{ borderColor: 'teal.500' }}
          _focus={{ boxShadow: 'outline' }}
        />
        <InputRightElement>
          <Button
            size="sm"
            onClick={() => onSearch(searchQuery, selectedCategory)}
            variant="ghost"
            borderRadius="full"
            colorScheme="teal"
            aria-label="Search"
          >
            <SearchIcon color="teal.500" />
          </Button>
        </InputRightElement>
      </InputGroup>

      <Grid
        templateColumns={{
          base: '1fr',         
          sm: 'repeat(2, 1fr)', 
          md: 'repeat(3, 1fr)', 
          lg: 'repeat(4, 1fr)', 
        }}
        gap={6}
        paddingX={{ base: '4', md: '8' }}
      >
        {filteredCourses.map((course) => (
          <Box
            key={course.id}
            borderWidth="1px"
            borderRadius="lg"
            padding="5"
            bg="white"
            boxShadow="md"
            _hover={{ boxShadow: 'lg', transform: 'scale(1.02)' }}
            transition="all 0.3s ease"
          >
            <VStack align="start" spacing={3}>
              <Text fontSize="lg" fontWeight="semibold" color="teal.600">
                {course.title}
              </Text>
              <Text fontSize="sm" color="gray.700">
                {course.description}
              </Text>
              <Badge colorScheme="green" fontSize="sm" rounded="full" px="2">
                Tamanho total do vídeo: {course.videoSize} MB
              </Badge>
              <Box display="flex" justifyContent="space-between" w="100%">
                <Button colorScheme="teal" size="sm" onClick={() => handleEditClick(course)}>
                  Editar
                </Button>
                <Button colorScheme="red" size="sm" onClick={() => { setCourseToDelete(course.id); onDeleteOpen(); }}>
                  Excluir
                </Button>
              </Box>
            </VStack>
          </Box>
        ))}
      </Grid>

      <Modal isOpen={isOpen} onClose={handleCancelEdit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Curso</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {currentCourse && (
              <>
                <FormLabel>Título</FormLabel>
                <Input
                  value={currentCourse.title}
                  onChange={(e) => setCurrentCourse({ ...currentCourse, title: e.target.value })}
                  mb={4}
                />
                <FormLabel>Descrição</FormLabel>
                <Input
                  value={currentCourse.description}
                  onChange={(e) => setCurrentCourse({ ...currentCourse, description: e.target.value })}
                  mb={4}
                />
              </>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={handleSaveChanges} mr={3}>
              Salvar
            </Button>
            <Button variant="ghost" onClick={handleCancelEdit}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <AlertDialog isOpen={isDeleteOpen} onClose={onDeleteClose} leastDestructiveRef={cancelRef}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Excluir curso
            </AlertDialogHeader>
            <AlertDialogBody>
              Tem certeza de que deseja excluir este curso? Esta ação não pode ser desfeita.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onDeleteClose}>
                Cancelar
              </Button>
              <Button colorScheme="red" onClick={handleDelete} ml={3}>
                Excluir
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default HomePage;
