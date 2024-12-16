# Work Live Task
![Task Management Board Poster](https://i.ibb.co/dBfrDbG/Screenshot-2024-12-16-094323.png)

A dynamic task management board built with React. This project allows users to organize tasks in columns, drag and drop tasks, and add/remove tasks using a modal interface.


---




### Explanation of the Code Snippet
```<Suspense fallback={<div>Loading....</div>}>
 <BrowserRouter>
    <StyleSheetManager shouldForwardProp={(prop)=>prop!=="shake"}>
    <App />
    </StyleSheetManager>
    </BrowserRouter>
  </Suspense> explain this line
```
- **`<Suspense>`**: Handles lazy-loading of components and displays a fallback UI (like "Loading....") while components are loading.
- **`<BrowserRouter>`**: Provides routing functionality for the app, enabling navigation between pages without reloading.
- **`<StyleSheetManager>`**: Manages CSS-in-JS styling and controls which props are forwarded to the underlying DOM elements.


### Dependencies Explanation

- **autoprefixer**: A tool that automatically adds vendor prefixes to CSS properties to ensure cross-browser compatibility.
- **postcss**: A CSS tool that processes styles with plugins like autoprefixer or minifiers.
- **react-beautiful-dnd**: A drag-and-drop library for React, providing beautiful and accessible drag-and-drop interactions.
- **react-icons**: A library for including icons in React apps with support for various icon packs.
- **react-ionicons**: A set of Ionicons (from the Ionic framework) for React applications.
- **react-router-dom**: A React library for declarative routing in single-page applications, managing navigation and URLs.
- **styled-components**: A CSS-in-JS library for writing scoped CSS inside JavaScript, leveraging tagged template literals.
- **tailwindcss**: A utility-first CSS framework for building custom designs quickly with pre-defined classes.
- **uuid**: For generating unique task IDs.
- **localStorage**: For saving the board state.



## Features

- **Drag-and-Drop**: Use `react-beautiful-dnd` for smooth task movement between columns.
- **Modal for Task Addition**: A modal to add new tasks with custom data.
- **Persistent Storage**: Task board data is stored in the browser's `localStorage`, ensuring data is not lost on page reload.
- **Task Management**: Easily delete tasks and manage task properties (e.g., title, description, priority).

---


## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/harshnishad/task-management-board.git
    cd task-management-board
    ```

2. Install the dependencies:
    ```bash
    yarn add
    ```

3. Start the development server:
    ```bash
    yarn run dev --host
    ```

---

## How it Works

### `Board.tsx`

The `Home` component is the main interface of the task board.

#### Key Features

1. **State Management**:
   - `columns`: Holds the entire board structure, including columns and tasks.
   - `modalOpen`: A boolean state to control the visibility of the task creation modal.
   - `selectedColumn`: Keeps track of the column where a new task is being added.

2. **Functions**:
   - `openModal(columnId)`: Opens the task modal for the selected column.
   - `closeModal()`: Closes the task modal.
   - `handleAddTask(taskData)`: Adds a new task to the selected column.
   - `handleDeleteTask(taskId, columnId)`: Deletes a task from a column.
   - `handleDragEnd(result)`: Handles the task movement between columns during drag-and-drop.

3. **Rendering**:
   - **DragDropContext**: This wrapper enables drag-and-drop functionality.
   - **Droppable & Draggable**: Each column is a droppable area, and each task is draggable.
   - **Add Task Button**: Opens the modal to create new tasks in the respective column.

#### Example Code for Handling Task Addition

```tsx
const handleAddTask = (taskData: any) => {
  const newTask = {
    id: uuidv4(),
    title: taskData.title,
    description: taskData.description,
    priority: taskData.priority,
    deadline: taskData.deadline,
    image: taskData.image || taskImage,
    tags: taskData.tags || [],
  };

  const newBoard = { ...columns };
  newBoard[selectedColumn].items.push(newTask);
  setColumns(newBoard);
  localStorage.setItem("board", JSON.stringify(newBoard));
};
```


---

### Explanation of Key Sections

1. **Project Structure**: This section provides an overview of how the project is organized into various folders and files, including where to find the main components, types, and assets.
  
2. **Dependencies**: Lists all the libraries and tools used in the project, such as `react-beautiful-dnd` for drag-and-drop and `uuid` for generating unique task IDs.

3. **Setup Instructions**: Explains how to clone the repository, install dependencies, and start the development server.

4. **How it Works**: Provides an overview of the main features in the `Home.tsx` component, explaining how state is managed and how tasks are added, deleted, and moved between columns.

5. **Customization**: Gives instructions on how to modify the default board structure and task image.

---

With this Markdown file, users and developers will be able to quickly understand the setup and functionality of your task management board. Feel free to adjust it according to your needs!


