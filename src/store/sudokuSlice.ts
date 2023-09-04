import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {ICoordinates} from "../types.ts";

export interface SudokuState {
  field: number[][]
  selectedCell: ICoordinates
}

const getEmptyField = (): number[][] => {
  const row = new Array(9).fill(0)
  return new Array(9).fill(row)
}

const initialState: SudokuState = {
  field: getEmptyField(),
  selectedCell: {
    x: -1,
    y: -1
  }
}

interface IChangeValueAction extends ICoordinates {
  value: number
}

export const {reducer, actions} = createSlice({
  name: 'sudoku',
  initialState,
  reducers: {
    selectCell: (state, {payload}: PayloadAction<ICoordinates>) => {
      console.log(payload)
      state.selectedCell = payload
    },
    changeCellValue: (state, {payload}: PayloadAction<IChangeValueAction>) => {
      state.field[payload.x][payload.y] = payload.value
    },
  },
})

export const {selectCell, changeCellValue} = actions

export default reducer