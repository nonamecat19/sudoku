import {FC} from "react";
import styled from "styled-components";
import {Button, Spinner} from "@nextui-org/react";
import {useDispatch, useSelector} from "react-redux";
import {ICoordinates} from "../types.ts";
import {selectCell} from "../store/sudokuSlice.ts";
import {RootState} from "../store/store.ts";
import {COLORS} from "../config/colors.ts";

interface IProps extends ICoordinates{

}

const CellComponent = styled.div<{
  selected: boolean
}>`
  box-sizing: border-box;
  display: grid;
  place-items: center;
  transition: 0.5s all;
  background: ${({selected}) => selected ? COLORS.light1 : 'none'};
  border-radius: 10px;

  &:hover {
    scale: 1.15;

    span {
      color: #3f3f3f;
    }
  }
`

const NumberComponent = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`

export const Cell: FC<IProps> = ({x, y}) => {
  const selectedCell = useSelector((state: RootState) => state.sudoku.selectedCell)
  const dispatch = useDispatch()

  const cellClickHandler = (): void => {
    dispatch(selectCell({x, y}))
  }

  const isCellSelected = (): boolean => {
    return selectedCell.x === x || selectedCell.y === y
  }

  return (
    <CellComponent
      selected={isCellSelected()}
      onClick={cellClickHandler}
    >
      <Button
        isIconOnly
        color="warning"
        size="lg"
        onClick={cellClickHandler}
      >
        <NumberComponent>
          {/*{Math.trunc(Math.random() * 10)}*/}
          {
            x === selectedCell.x && y === selectedCell.y
              ? <Spinner color='default'/>
              : x + '|' + y
          }
        </NumberComponent>
      </Button>
    </CellComponent>
  )
}