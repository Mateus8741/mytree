import { DragDropContext, Droppable, type DropResult } from '@hello-pangea/dnd'
import { CardContent } from './cardContent'

export interface DragProps {
  onDragEnd: (data: DropResult) => void
  contentCardMap: {
    id: number
    nameContent: string
    url: string
    isChecked: boolean
  }[]
}

export function DraggableContext({ onDragEnd, contentCardMap }: DragProps) {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="links" direction="vertical">
        {(provider) => (
          <div ref={provider.innerRef} {...provider.droppableProps}>
            {contentCardMap.map((_, index) => (
              <CardContent
                key={_.id}
                index={index}
                nameContent={_.nameContent}
                url={_.url}
                isChecked={_.isChecked}
              />
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
