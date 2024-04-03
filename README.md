# Aplicación de Lista de Tareas (Todo List)

Esta es una aplicación web desarrollada con ReactJS y JavaScript que permite gestionar una lista de tareas (todos). La aplicación consulta un endpoint para obtener los datos de las tareas, los almacena en un estado global utilizando la librería "Zustand" y los muestra en forma de tarjetas. Además, permite agregar nuevas tareas mediante un formulario y actualiza el estado global para mostrar las nuevas tareas agregadas. Dependiendo del estado "completed" de cada tarea, se alternan los colores de las tarjetas.

## Componentes

- **App.js**: El componente principal de la aplicación que contiene el diseño general y maneja la lógica principal.
- **List.js**: Un componente que muestra la lista de tareas en forma de tarjetas.
- **Card.js**: Un componente que representa una tarjeta individual para una tarea, mostrando los atributos "id", "title" y "completed".
- **AddItem.js**: Un formulario que permite agregar nuevas tareas a la lista.

## Funcionalidades

- Consulta el endpoint "https://jsonplaceholder.typicode.com/todos" para obtener la lista de tareas.
- Almacena los datos de las tareas en un estado global utilizando Zustand.
- Muestra las tareas en forma de tarjetas, excluyendo el atributo "userId" y mostrando los atributos "id", "title" y "completed".
- Permite agregar nuevas tareas mediante un formulario.
- Actualiza el estado global para mostrar las nuevas tareas agregadas.
- Alterna el color de las tarjetas dependiendo del estado "completed" de cada tarea.

## Tecnologías Utilizadas

- ReactJS: Para el desarrollo de la interfaz de usuario y la lógica de la aplicación.
- JavaScript: Para la programación del lado del cliente.
- Zustand: Para la gestión del estado global de la aplicación.

Esta aplicación proporciona una interfaz interactiva para gestionar una lista de tareas, permitiendo agregar nuevas tareas y ver su estado de completado.

## Instalación

1. Clona el repositorio:

```bash
git clone <https://github.com/emanuel545/prueba.git>
