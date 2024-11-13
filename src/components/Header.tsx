import {
  Box,
  Flex,
  Text,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  useBreakpointValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  VStack
} from "@chakra-ui/react";
import { FaMoon, FaSun, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

interface HeaderProps {
  onSearch: (query: string, category?: string) => void;
  onCategoryChange: (category: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch, onCategoryChange }) => {
  const { colorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Modal controls for login and registration
  const { isOpen: isLoginOpen, onOpen: onLoginOpen, onClose: onLoginClose } = useDisclosure();
  const { isOpen: isSignupOpen, onOpen: onSignupOpen, onClose: onSignupClose } = useDisclosure();

  return (
    <Box as="header" bg={colorMode === "light" ? "teal.400" : "gray.800"} boxShadow="lg" py={4} px={8} position="sticky" top={0} zIndex={1}>
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto" direction={isMobile ? "column" : "row"} gap={isMobile ? 4 : 8}>
        <Flex align="center" gap={4} direction={isMobile ? "column" : "row"}>
          <Text fontSize="2xl" fontWeight="extrabold" color="white" letterSpacing="wider">
            📚 Meus Cursos
          </Text>
          <Menu>
            <MenuButton as={Button} rightIcon={<FaChevronDown />} colorScheme="teal" variant="outline">
              Categorias
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => onCategoryChange('Automação Industrial')}>Automação Industrial</MenuItem>
              <MenuItem onClick={() => onCategoryChange('Desenvolvimento de Aplicativos')}>Desenvolvimento de Aplicativos</MenuItem>
              <MenuItem onClick={() => onCategoryChange('Gestão da Qualidade')}>Gestão da Qualidade</MenuItem>
              <MenuItem onClick={() => onCategoryChange('Arquitetura de Software')}>Arquitetura de Software</MenuItem>
              <MenuItem onClick={() => onCategoryChange('Engenharia de Dados')}>Engenharia de Dados</MenuItem>
              <MenuItem onClick={() => onCategoryChange('Redes de Computadores')}>Redes de Computadores</MenuItem>
              <MenuItem onClick={() => onCategoryChange('Segurança da Informação')}>Segurança da Informação</MenuItem>
              <MenuItem onClick={() => onCategoryChange('Machine Learning')}>Machine Learning</MenuItem>
              <MenuItem onClick={() => onCategoryChange('Internet das Coisas (IoT)')}>Internet das Coisas (IoT)</MenuItem>
              <MenuItem onClick={() => onCategoryChange('Marketing de Conteúdo')}>Marketing de Conteúdo</MenuItem>
              <MenuItem onClick={() => onCategoryChange('Edição de Vídeo')}>Edição de Vídeo</MenuItem>
              <MenuItem onClick={() => onCategoryChange('Tecnologia da Informação')}>Tecnologia da Informação</MenuItem>
              <MenuItem onClick={() => onCategoryChange('Gestão Ambiental')}>Gestão Ambiental</MenuItem>
              <MenuItem onClick={() => onCategoryChange('Neurociência')}>Neurociência</MenuItem>
              <MenuItem onClick={() => onCategoryChange('Comércio Exterior')}>Comércio Exterior</MenuItem>
              <MenuItem onClick={() => onCategoryChange('Engenharia de Software')}>Engenharia de Software</MenuItem>
              <MenuItem onClick={() => onCategoryChange('Finanças Corporativas')}>Finanças Corporativas</MenuItem>
              <MenuItem onClick={() => onCategoryChange('Desenvolvimento Pessoal')}>Desenvolvimento Pessoal</MenuItem>
              <MenuItem onClick={() => onCategoryChange('Produção Multimídia')}>Produção Multimídia</MenuItem>
              <MenuItem onClick={() => onCategoryChange('Transformação Organizacional')}>Transformação Organizacional</MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        <Flex gap={4} align="center" direction={isMobile ? "column" : "row"}>
          <Link color="white" fontSize="lg" fontWeight="medium" href="/" _hover={{ color: "yellow.300", textDecoration: "underline" }}>
            Página Inicial
          </Link>
          <Link color="white" fontSize="lg" fontWeight="medium" href="/add-course" _hover={{ color: "yellow.300", textDecoration: "underline" }}>
            Adicionar Curso
          </Link>
        </Flex>
        <Flex gap={4} align="center" direction={isMobile ? "column" : "row"}>
          <Button onClick={onLoginOpen} colorScheme="teal" variant="outline">
            Fazer Login
          </Button>
          <Button onClick={onSignupOpen} colorScheme="teal" variant="solid">
            Cadastre-se
          </Button>
        </Flex>
      </Flex>

      <Modal isOpen={isLoginOpen} onClose={onLoginClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Fazer Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Input placeholder="E-mail" type="email" />
              <Button colorScheme="teal" width="full">
                Continuar com e-mail
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal isOpen={isSignupOpen} onClose={onSignupClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cadastre-se</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Input placeholder="Nome completo" />
              <Input placeholder="E-mail" type="email" />
              <Input placeholder="Senha" type="password" />
              <Button colorScheme="teal" width="full">
                Cadastre-se
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Header;
