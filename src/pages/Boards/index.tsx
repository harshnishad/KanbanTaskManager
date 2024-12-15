import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";
import { Board } from "../../data/board"; // Board structure ko import karo
import { Columns } from "../../type";
//import { onDragEnd } from "../../helper/onDragEnds"; // Make sure yeh task ko move karne mein madad kare
import { AddOutline } from "react-ionicons";
import AddModal from "../../component/models/AddModal";
import Task from "../../component/task";
import { v4 as uuidv4 } from "uuid";
//import { getRandomColors } from "../../helper/getRandomColors";
import taskImage from "../../assets/Images/task.jpg";

const Home = () => {
  const savedBoard = localStorage.getItem("board");
  const initialBoard = savedBoard ? JSON.parse(savedBoard) : Board;
  const [columns, setColumns] = useState<Columns>(initialBoard);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState("");

  // Modal open karne ka function, jab user kisi column mein task add karna chahe
  const openModal = (columnId: string) => {
    setSelectedColumn(columnId);
    setModalOpen(true);
  };

  // Modal close karne ka function
  const closeModal = () => {
    setModalOpen(false);
  };

  // Selected column mein task add karne ka function
  const handleAddTask = (taskData: any) => {
    const newTask = {
      id: uuidv4(),
      title: taskData.title,
      description: taskData.description,
      priority: taskData.priority,
      deadline: taskData.deadline,
      image: taskData.image || taskImage,
      alt: taskData.alt || "Task image",
      tags: taskData.tags || [],
    };

    const newBoard = { ...columns };
    newBoard[selectedColumn].items.push(newTask);
    setColumns(newBoard);
    localStorage.setItem("board", JSON.stringify(newBoard));
  };

  // Task ko delete karne ka function
  const handleDeleteTask = (taskId: string, columnId: string) => {
    const newBoard = { ...columns };
    newBoard[columnId].items = newBoard[columnId].items.filter(
      (task: any) => task.id !== taskId
    );
    setColumns(newBoard);
    localStorage.setItem("board", JSON.stringify(newBoard));
  };

  // onDragEnd event ko handle karna, jab task ko drag karke drop kiya jata hai
  const handleDragEnd = (result: any) => {
    const { source, destination } = result;

    // Agar task kisi column ke bahar drop hota hai ya source aur destination same hote hain, toh kuch nahi karna
    if (!destination || source.droppableId === destination.droppableId) {
      return;
    }

    const newBoard = { ...columns };

    // Drag kiya hua task le lo
    const [movedTask] = newBoard[source.droppableId].items.splice(source.index, 1);

    // Moved task ko destination column mein daal do
    newBoard[destination.droppableId].items.splice(destination.index, 0, movedTask);

    setColumns(newBoard);
    localStorage.setItem("board", JSON.stringify(newBoard));
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="w-full flex items-start justify-between px-5 pb-8 md:gap-0 gap-10">
          {Object.entries(columns).map(([columnId, column]: any) => (
            <div className="w-full flex flex-col gap-0" key={columnId}>
              <Droppable droppableId={columnId} key={columnId}>
                {(provided: any) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="flex flex-col md:w-[290px] w-[250px] gap-3 items-center py-5"
                  >
                    <div className="flex items-center justify-center py-[10px] w-full bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]">
                      {column.name}
                    </div>
                    {column.items.map((task: any, index: any) => (
                      <Draggable
                        key={task.id.toString()}
                        draggableId={task.id.toString()}
                        index={index}
                      >
                        {(provided: any) => (
                          <Task
                            provided={provided}
                            task={task}
                            handleDelete={() => handleDeleteTask(task.id, columnId)} // Delete function pass karo
                          />
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <div
                onClick={() => openModal(columnId)}
                className="flex cursor-pointer items-center justify-center gap-1 py-[10px] md:w-[90%] w-full opacity-90 bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]"
              >
                <AddOutline color={"#555"} />
                Add Task
              </div>
            </div>
          ))}
        </div>
      </DragDropContext>

      <AddModal
        isOpen={modalOpen}
        onClose={closeModal}
        setOpen={setModalOpen}
        handleAddTask={handleAddTask}
      />
    </>
  );
};

export default Home;
