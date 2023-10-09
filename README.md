# ABC Jobs WebApplication

### Cómo Ejecutar

1. Clonar el repositorio
```
git clone git@github.com:ROCALEDA/rocaleda-fp-web-template.git
``````

2. Instalar dependencias

```
npm install
```

3. Ejecutar el proyecto

```
npm run dev
```

4. Abrir el navegador en la dirección http://localhost:3000


5. Ejecutar Cypress en modo interactivo

```
npm run e2e
```

También es posible ejecutar el proyecto desde un contenedor Docker. Para ello, ejecutar los siguientes comandos:

```
docker build -t rocaleda-fp-web-template .
docker run -p 3000:3000 rocaleda-fp-web-template
```

