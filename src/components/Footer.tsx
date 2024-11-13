import { Box, Flex, Text, Link, Divider, Select } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <Box as="footer" bg="gray.900" color="white" py={12} mt={8} borderTop="4px solid #38B2AC">
    <Flex direction="column" align="center" maxW="1200px" mx="auto" px={{ base: 4, md: 6 }}>
      <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color="teal.400" mb={4} textAlign="center">
        Explorar mais
      </Text>
      <Flex direction={{ base: "column", md: "row" }} justify="center" gap={{ base: 4, md: 10 }} mb={6} textAlign="center">
        <Link href="#" _hover={{ color: "teal.400" }}>Sobre nós</Link>
        <Link href="#" _hover={{ color: "teal.400" }}>Contato</Link>
        <Link href="#" _hover={{ color: "teal.400" }}>Blogue</Link>
        <Link href="#" _hover={{ color: "teal.400" }}>Central de Ajuda</Link>
      </Flex>

      <Divider borderColor="gray.600" mb={6} />

      <Flex justify="center" gap={6} mb={4}>
        <Link href="https://github.com" isExternal _hover={{ color: "teal.400" }}>
          <FaGithub size={24} />
        </Link>
        <Link href="https://linkedin.com" isExternal _hover={{ color: "teal.400" }}>
          <FaLinkedin size={24} />
        </Link>
        <Link href="https://twitter.com" isExternal _hover={{ color: "teal.400" }}>
          <FaTwitter size={24} />
        </Link>
      </Flex>

      <Flex justify={{ base: "center", md: "flex-end" }} w="100%" mt={6}>
        <Select 
          placeholder="Selecione o idioma" 
          width={{ base: "full", md: "auto" }} 
          bg="gray.200" 
          color="black" 
          borderColor="teal.400"
          maxW={{ base: "100%", md: "fit-content" }}
        >
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
          <option value="it">Italiano</option>
          <option value="pt">Português</option>
          <option value="zh">中文</option>
          <option value="ja">日本語</option>
          <option value="ru">Русский</option>
          <option value="ar">العربية</option>
          <option value="hi">हिन्दी</option>
          <option value="ko">한국어</option>
          <option value="pl">Polski</option>
          <option value="tr">Türkçe</option>
          <option value="nl">Nederlands</option>
          <option value="sv">Svenska</option>
          <option value="no">Norsk</option>
          <option value="da">Dansk</option>
          <option value="fi">Suomi</option>
          <option value="cs">Čeština</option>
        </Select>
      </Flex>

      <Text fontSize="sm" mt={6} textAlign="center">
        © 2024, Todos os direitos reservados.
      </Text>
    </Flex>
  </Box>
);

export default Footer;
