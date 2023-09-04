import {FC} from "react";
import styled from "styled-components";
import {Button} from "@nextui-org/react";
import {useDispatch} from "react-redux";
import {ICoordinates} from "../types.ts";
import {selectCell} from "../store/sudokuSlice.ts";

interface IProps extends ICoordinates{

}

const CellComponent = styled.div`
  box-sizing: border-box;
  display: grid;
  place-items: center;
  transition: 0.5s all;

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
  const dispatch = useDispatch()

  const cellClickHandler = () => {
    dispatch(selectCell({x, y}))
  }

  return (
    <CellComponent
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
          {x + '|' + y}
        </NumberComponent>
      </Button>
    </CellComponent>
  )
}