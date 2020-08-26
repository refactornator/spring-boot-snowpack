# spring-boot-snowpack

A sample project for getting spring boot and snowpack to work together

### Getting Started

Install dependencies and start snowpack in watch mode

```
npm install
npm start
```

This saves the output of snowpack to the `src/main/resources/static` directory and moves the `index.html` file into `src/main/resources/templates`

in a separate terminal, start Spring Boot

```
./mvnw spring-boot:run
```

open http://localhost:8080

edit `frontend/components/App.svelte` and see your changes live in the browser
