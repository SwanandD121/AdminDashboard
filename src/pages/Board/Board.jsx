import Board, {moveCard, moveColumn, removeCard, addCard} from '@asseinfo/react-kanban'
import "@asseinfo/react-kanban/dist/styles.css"
import useBoard from '../../store/Board'
import "./Board.css"
import {RxCross2} from 'react-icons/rx'
import {IoMdAdd} from 'react-icons/io'
import AddCardModal from '../../components/AddCardModal/AddCardModal';
import { useState } from 'react'
import { AddCard } from '@mui/icons-material'

const BoardPage = () => {

    const {board, setBoard} = useBoard()

    // const handleColumnMove = (_card, source, destination) => {
    //     const updatedBoard = moveColumn(board, source, destination)
    //     setBoard(updatedBoard)
    // }

    // const handleCardMove = (_card, source, destination) => {
    //     const updatedBoard = moveCard(board, source, destination)
    //     setBoard(updatedBoard)
    // }

    /* cards ki position change ki to wo phir se wapas ja rahe - (update: chal gaya) */
    const handleColumnMove = (_card, source, destination) => {
        const updatedBoard = moveColumn(board, source, destination)
        setBoard(updatedBoard)
    }

    const handleCardMove = (_card, source, destination) => {
        const updatedBoard = moveCard(board, source, destination)
        setBoard(updatedBoard)

    }
    /* cards ki position change ki to wo phir se wapas ja rahe - (update: chal gaya) */

    const getColumn = (card) => {
        const column = board.columns.filter((column)=> column.cards.includes(card))
        return column[0]
    }

    const getGradient = (card) => {
        const column = getColumn(card)
        const title = column.title

        if (title === "TODO") {
            return {
                background:
                    "linear-gradient(65.35deg,  #e74c3c  -1.72%,   #240b36 163.54%)",
            };
        } else if (title === "Doing") {
            return {
                background:
                    "linear-gradient(65.35deg, #cc5333 -1.72%, #240b36 163.54%)",
            };
        } else if (title === "Completed") {
            return {
                background:
                    "linear-gradient(65.35deg,  #414dbb -1.72%, #240b36 163.54%)",
            };
        } else if (title === "Backlog") {
            return {
                background:
                    "linear-gradient(65.35deg, #c31432 -1.72%, #240b36 163.54%)",
            };
        }
    }

  return (

    <div className="board-container">

        <span>Trello Board</span>

        <Board
        allowAddColumn
        allowRenameColumn
        allowRemoveCard
        onCardDragEnd={handleCardMove}  /* cards ki position change ki to wo phir se wapas ja rahe */
        onColumnDragEnd={handleColumnMove}  /* cards ki position change ki to wo phir se wapas ja rahe */
        renderCard = {(props)=> (
            <div className='kanban-card' style={getGradient(props)}>
                <div>
                    <span>
                        {props.title}
                    </span>

                    {/* remove card nahi chal raha - (update: chal gaya) */}

                    <button className='remove-button' type='button'
                        onClick={() => {
                            const updatedBoard = removeCard(board,
                                getColumn(props),
                                props
                            )
                            setBoard(updatedBoard)
                        }}
                    > 

                    {/* remove card nahi chal raha - (update: chal gaya) */}

                        <RxCross2 color="white" size={15}/>
                    </button>
                </div>

                <span>{props.description}</span>

            </div>
        )}

        // Add ka option nahi aaraha
        renderColumnHeader = {(props) => {

            const [modalOpened, setModalOpened] = useState(false)

            const handleCardAdd = (title, detail) => {
                const card = {
                    id: new Date().getTime(),
                    title,
                    description: detail
                };

                const updatedBoard = addCard(board, props, card)
                setBoard(updatedBoard)
                setModalOpened(false)
            }

            return (
                <div className='column-header'>
                            <span>{props.title}</span>

                            <IoMdAdd
                                color="white"
                                size={25} title="Add card"
                                onClick={()=>setModalOpened(true)}
                            />
                            <AddCardModal visible={modalOpened} handleCardAdd={handleCardAdd}
                                onClose={() => setModalOpened(false)} />
                        </div>
            // <div className='column-header'>
            //     <span>{props.title}</span>

            //     <IoMdAdd
            //         color="white"
            //         size={25}
            //         title="Add card"
            //         onClick = {()=> setModalOpened(true)}
            //     />
            //     <AddCardModal visible={modalOpened} handleCardAdd={handleCardAdd}
            //     onClose = {()=> setModalOpened(false)}/>
            // </div>
            )
        }}
        // Add ka option nahi aaraha
        
        >
            

            {board}
        </Board>
    </div>
  )
}

export default BoardPage
