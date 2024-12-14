
import {DragDropContext} from 'react-beautiful-dnd'
const Boards = () => {
  return (
    <>
    <DragDropContext  onDragEnd={(result:any)=>console.log(result)}>
    <div></div>

    </DragDropContext>

    </>
  )
}

export default Boards;