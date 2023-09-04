import {FC} from "react";
import {Table} from "../components/Table.tsx";
import styled from "styled-components";
import {Navigation} from "../components/Navigation.tsx";
import {Status} from "../components/Status.tsx";

interface IProps {

}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
`

const HeadingComponent = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  background: linear-gradient(to right, #e8512c, #ff9202);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const App: FC<IProps> = () => {
  return (
    <>
      <Container>
        <HeadingComponent>
          SUDOKU
        </HeadingComponent>
        <Table/>
        <Navigation/>
        <Status/>
      </Container>
    </>
  )
}

export default App
