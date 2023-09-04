import {FC} from "react";
import styled from "styled-components";
import {CellGroup} from "./CellGroup.tsx";
import {COLORS} from "../config/colors.ts";

interface IProps {

}

const TableComponent = styled.div`
  width: 580px;
  height: 580px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  background: ${COLORS.bg1};
  box-sizing: border-box;
  border: 5px solid ${COLORS.gray1};
  border-radius: 30px;
  padding: 10px;
`;

export const Table: FC<IProps> = () => {
  return (
    <TableComponent>
      {new Array(9).fill(null).map((_el, index) => {
        return <CellGroup groupIndex={index} key={index}/>
      })}
    </TableComponent>
  )
}