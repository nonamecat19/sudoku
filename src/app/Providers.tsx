import {FC, ReactNode, StrictMode} from "react";
import {NextUIProvider} from "@nextui-org/react";
import {IconContext} from "react-icons";
import {Provider} from "react-redux";
import {store} from "../store/store.ts";

interface IProps {
  children: ReactNode
}

const reactIconsConfig = {
  color: "black",
  size: "30"
}
export const Providers: FC<IProps> = ({children}) => {
  return (
    <StrictMode>
      <Provider store={store}>
        <IconContext.Provider value={reactIconsConfig}>
          <NextUIProvider>
            {children}
          </NextUIProvider>
        </IconContext.Provider>
      </Provider>
    </StrictMode>
  )
}