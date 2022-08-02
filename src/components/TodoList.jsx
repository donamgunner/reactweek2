import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo , toggleStatusTodo } from "../redux/modules/todos";
import {Link} from "react-router-dom"



const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos)

    const onDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    }

    const onToggleStatusTodo = (id) => {
        dispatch(toggleStatusTodo(id));
    }
    

    return (
        <>
            <div>
            <STTitle>하는중...🥅</STTitle>
            <WorkList>
                <StListWrapper>
                    {todos.map((todo) => {
                        if(!todo.isDone) {
                            return (
                                <StTodoContainer key = {todo.id}>
                                    <StLink to ={`/${todo.id}`} key={todo.id}>
                                        <div>상세보기</div>
                                    </StLink>
                                    <div>
                                        <h2 className="todo-title">{todo.title}</h2>
                                        <div>{todo.body}</div>
                                    </div>
                                    <StDialogFooter>
                                        <StButton
                                        borderColor="red"
                                        onClick={() => onDeleteTodo(todo.id)}>
                                            삭제하기
                                        </StButton>
                                        <StButton
                                            borderColor = "green"
                                            onClick={() => onToggleStatusTodo(todo.id)}
                                            >
                                                {todo.isDone ? "취소" : "완료"}
                                            </StButton>
                                    </StDialogFooter>
                                </StTodoContainer>

                            )
                        }else{
                            return null;
                        }
                    })}
                </StListWrapper>
            </WorkList>
            </div>
            <div>
            <STTitle>끝났다!!🎉</STTitle>
            <DoneList>
                
                <StListWrapper>
                    {todos.map((todo) => {
                        if(todo.isDone){
                            return (
                                <StTodoContainer key={todo.id}>
                                    <StLink to = {`/${todo.id}`} key ={todo.id}>
                                        <div>상세보기</div>
                                    </StLink>
                                    <div>
                                        <h2 className="todo-title">{todo.title}</h2>
                                        <div>{todo.body}</div>
                                    </div>
                                    <StDialogFooter>
                                        <StButton
                                        borderColor = "red"
                                        onClick={() => onDeleteTodo(todo.id)}
                                        >
                                            삭제하기
                                        </StButton>
                                        <StButton
                                        borderColor="green"
                                        onClick={() => onToggleStatusTodo(todo.id) }
                                        >
                                            {todo.isDone ? "취소" : "완료"}
                                        </StButton>
                                    </StDialogFooter>
                                </StTodoContainer>
                            )
                        }else {
                            return null;
                        }
                    })}
                </StListWrapper>
            </DoneList>
            </div>           
        </>
    )
}


export default TodoList;

const StListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;


const WorkList = styled.div`
    width: 350px;
    max-width: 350px;
    height: 100vh;
    margin: 50px 20px;
    float: left;

`

const DoneList = styled.div`
    width: 350px;
    max-width: 350px;
    height: 90vh;
    margin: 50px 20px;
    display: flex;
`
const StLink = styled(Link)`
  text-decoration: none;
`

const StDialogFooter = styled.footer`
  display: flex;
  justify-content: end;
  padding: 12px;
  gap: 12px;
`

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`

const StTodoContainer = styled.div`
  width: 270px;
  border: 4px solid teal;
  height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
  margin-top: 80px;
`;

const STTitle = styled.h2`
    width: 300px;
    
`