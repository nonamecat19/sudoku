import {FC} from "react";
import {ImRedo2, ImUndo2} from "react-icons/im";
import styled from "styled-components";
import {BiBulb, BiEraser} from "react-icons/bi";
import {NavigationButton} from "./NavigationButton.tsx";
import {COLORS} from "../config/colors.ts";

interface IProps {

}

const NavigationComponent = styled.div`
  margin-top: 20px;
  width: 700px;
  height: 110px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${COLORS.bg1};
  border-radius: 40px;
  border: 5px solid ${COLORS.gray1};
`

export const Navigation: FC<IProps> = () => {
  return (
    <NavigationComponent>

      <NavigationButton
        icon={<ImUndo2/>}
        text='Undo'
      />

      <NavigationButton
        icon={<ImRedo2/>}
        text='Redo'

      />

      <NavigationButton
        icon={<BiEraser/>}
        text='Erase'
      />

      <NavigationButton
        icon={<BiBulb/>}
        text='Hint'
      />

    </NavigationComponent>
  )
}