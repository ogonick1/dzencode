Orders & Products SPA Application
Overview
This project is a Single Page Application (SPA) for managing orders and products. The application includes real-time WebSocket functionality, routing, and state management. Key features include navigation, real-time date and time display, active sessions counter using Socket.io, and detailed order/product views. The front-end is built using Vue 3, and the back-end is powered by a Node.js API. Docker is used for containerization of both the front-end and back-end.

Additionally, the application includes the following advanced features:

JWT Authentication: JSON Web Tokens (JWT) are used for secure user authentication, ensuring protected routes and data access.
i18n: Internationalization is implemented to support multiple languages, making the application accessible to a broader audience.
Web Storage: LocalStorage is utilized to persist user sessions and preferences across browser reloads.
Lazy Loading: Components are lazily loaded to optimize initial load times, improving the application's performance.
Charts & Maps: The application integrates Chart.js for data visualization and Leaflet for interactive mapping, enhancing data interaction and display.
Project Structure
The project consists of two main directories:

api: This contains the back-end code (Node.js API).
dzencode: This contains the front-end code (Vue application).
Project Setup
Node.js and Docker must be installed on the computer beforehand

1. Clone the repository:
git clone https://github.com/ogonick1/dzencode
cd dzencode

3. Set up the API (Server):
cd api
npm install

4. Running the API in Development Mode:
npm run start

Alternatively, you can run the API with Docker:
docker-compose build
docker-compose up

4. Set up the Front-End (Client):
Open a new terminal:
cd dzencode 
or(cd dzencode/dzencode)
npm install

5. Running the Front-End in Development Mode:
npm run dev

Alternatively, you can run the front-end with Docker:
docker-compose build
docker-compose up
