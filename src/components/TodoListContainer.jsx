import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";


const TodoListContainer = () => {
    
    const todos = useSelector((state) => state.todos);
    console.log(todos)
    

        return (
            <TodoListBox/>
        )
        
        
    
}



export default TodoListContainer;

const TodoListBox = styled.div`
    width: 300px;
    max-width: 300px;
    height: 50px;
    border: 1px solid white;
`

