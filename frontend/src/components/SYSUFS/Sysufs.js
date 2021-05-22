import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState } from "react";

const Sysufs = () => {


  const parkingLotItems = [
    {
      id: "1",
      item: 'laundry'
    },
    {
      id: "2",
      item: 'groceries'
    },
    {
      id: "3",
      item: 'dishes'
    },
    {
      id: "4",
      item: 'vacuum'
    },
    {
      id: "5",
      item: 'sweep'
    }

  ];

  const [items, setItems] = useState(parkingLotItems)

  const handleOnDragEnd = (result) => {
    const elements = Array.from(items);
    const [reorderedElement] = elements.splice(result.source.index, 1);
    elements.splice(result.destination.index, 0, reorderedElement)
    setItems(elements)
  }

  return (
    <>
      <p>Set Yourself Up For Success</p>

      <div className="dnd-container">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="items">
            {(provided) => (
              <ul className="items" {...provided.droppableProps} ref={provided.innerRef}>



                {items.map(({ id, item }, index) => (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (

                      <li className="card" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>{item}</li>
                    )}


                  </Draggable>

                ))}


                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>


      </div>
    </>
  )
}

export default Sysufs;