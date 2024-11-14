# Meu Curso Aplicativo

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Página inicial
![Screenshot 2024-11-13 142701](https://github.com/user-attachments/assets/31b8fae4-e79e-4a29-bf42-510c9dc16021)


## Adicionar Curso
![Screenshot 2024-11-13 142711](https://github.com/user-attachments/assets/94d4ec18-5fc9-4692-a500-ffb915a17b37)

## Docker 
![Screenshot 2024-11-13 131815](https://github.com/user-attachments/assets/41a2732f-2af0-4a5a-9aad-454bacc694f5)



## Recursos

- **Design responsivo**: otimizado para telas de dispositivos móveis e desktop usando o Chakra UI.
- **Gerenciamento de cursos**: registre novos cursos, edite cursos existentes e exclua cursos.
- **Filtro de cursos ativos**: exiba apenas cursos cuja data de término ainda não passou.
- **Relatório de tamanho de vídeo**: mostre o tamanho total do vídeo para cada curso.
- **Validação de formulário**: garanta que todos os formulários (registro de curso, edição) sejam validados antes do envio.
- **SPA (Single Page Application)**: navegação suave sem recarregamentos de página para uma melhor experiência do usuário.
- **Teste de unidade**: garanta a confiabilidade do aplicativo usando Jest e React Testing Library.
- **Dockerizado**: o aplicativo é empacotado usando Docker para fácil implantação.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

Docker Setup (Optional)
Build the Docker Image:

If you want to run the project in Docker, use the following command to build the image:

bash
Copy code
docker build -t course-management-platform .
Run the Docker Container:

After building the image, run it using Docker:

bash
Copy code
docker run -p 3000:3000 course-management-platform
The app will be available at http://localhost:3000.


## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Chakra UI**: A simple, modular, accessible UI component library.
- **TypeScript**: A typed superset of JavaScript for type safety.
- **Jest**: JavaScript testing framework for unit tests.
- **React Testing Library**: For rendering React components in a test environment.
- **Docker**: Containerization of the application for easy deployment.


## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [Docker](https://www.docker.com/) (optional, if you want to run in a containerized environment)

