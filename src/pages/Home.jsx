import React from "react";
import styled from "styled-components";
import AddForm  from "../components/AddForm";
import TodoList from "../components/TodoList";


const Home = () => {

    return(
       <> 
        <AddForm/>
        <Title>My Todo List</Title>
        <StContainer>
        <TodoList/>
        </StContainer>
      </> 
    )
}
export default Home;


const StContainer = styled.section`
  width: 800px;
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  
`;
const Title = styled.div`
  width: 500px;
  max-width: 500px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  font-size: 40px;
  font-weight: bold;
  justify-content: center;
  color: #764abc;
`
