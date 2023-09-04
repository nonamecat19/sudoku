import {FC, ReactNode} from "react";
import {Button} from "@nextui-org/react";
interface IProps {
  icon: ReactNode
  text: string
  onClick?: () => void
}

export const NavigationButton: FC<IProps> = ({icon, text, onClick}) => {
  return (
    <Button
      size='lg'
      onClick={onClick}
      color='warning'
      variant='shadow'
    >
      {icon}
      {text}
    </Button>
  )
}