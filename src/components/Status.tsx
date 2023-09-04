import {FC} from "react";
import {Progress} from "@nextui-org/react";
import styled from "styled-components";
import {COLORS} from "../config/colors.ts";

interface IProps {

}

const StatusComponent = styled.div`
  background: ${COLORS.bg1};
  border: 5px solid ${COLORS.gray1};
  position: absolute;
  right: 50px;
  width: 400px;
  padding: 20px;
  border-radius: 20px;
`

export const Status: FC<IProps> = () => {
  return (
    <StatusComponent>
      {
        new Array(9).fill(null).map((_el, index) => {
          return (
            <Progress
              key={index}
              label={`${index + 1} - 5/9`}
              value={index * 10 + 10}
              className="max-w-md"
              color='warning'
            />
          )
        })
      }
    </StatusComponent>
  )
}