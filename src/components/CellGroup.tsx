import {FC} from "react";
import styled from "styled-components";
import {Cell} from "./Cell.tsx";
import {COLORS} from "../config/colors.ts";
import {ICoordinates} from "../types.ts";
import {useSelector} from "react-redux";
import type {RootState} from "../store/store.ts";

interface IProps {
  groupIndex: number
}

const CellGroupComponent = styled.div<{
  selected: boolean
}>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: ${({selected}) => selected ? COLORS.light1 : COLORS.bg3};
  box-sizing: border-box;
  border: 2px solid ${COLORS.bg2};
  padding: 5px;
  border-radius: 20px;
`

export const CellGroup: FC<IProps> = ({groupIndex}) => {

  const selectedCell = useSelector((state: RootState) => state.sudoku.selectedCell)
  const getCoordinates = (index: number): ICoordinates => ({
    x: (groupIndex % 3) * 3 + index % 3,
    y: Math.trunc(groupIndex / 3) * 3 + Math.trunc(index / 3),
  })

  const isGroupSelected = (): boolean => {
    const xSelected = Math.trunc(selectedCell.x / 3) === groupIndex % 3
    const ySelected = Math.trunc(selectedCell.y / 3) === Math.trunc(groupIndex / 3)
    return xSelected && ySelected
  }

  return (
    <CellGroupComponent selected={isGroupSelected()}>
      {new Array(9).fill(null).map((_el, index) => {
        return <Cell {...getCoordinates(index)} key={index}/>
      })}
    </CellGroupComponent>
  )
}