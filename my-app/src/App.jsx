import styled from "styled-components";
import React, { useState, useEffect } from "react";
// import { TodoList } from "./components/TodoList";

export const App = () => {
    const [task, setTask] = useState("");
    const [taskList, setNewTaskList] = React.useState([]);
    const [doneList, setNewDoneList] = React.useState([]);
    // console.log("reRendering")

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const AddTask = () => {
        if (task === "") return;
        
        taskList.push(task);
        setTask("");
    };

    const AddDoneTask = (index) => {
        doneList.push(taskList[index]);
        taskList.splice(index, 1);
        
        const newTaskList = [...taskList];
        const newDoneList = [...doneList];

        setNewTaskList(newTaskList);
        setNewDoneList(newDoneList);
    }

    const BackToTask = (index) => {
        taskList.push(doneList[index]);
        doneList.splice(index, 1);

        const newTaskList = [...taskList];
        const newDoneList = [...doneList];

        setNewTaskList(newTaskList);
        setNewDoneList(newDoneList);
    }

    const pBold = {
        fontWeight: "bold"
    };

    return (
        <TodoOrigin>
            <Title>TODOアプリ</Title>
            <TodoForm>
                <TodoInput type="text" value={task} onChange={handleChange} />
                <Button onClick={AddTask}>追加</Button>
            </TodoForm>
            <TodoContent>
                {/* タスク一覧 */}
                <Tasks>
                    <p style={pBold}>未実施のタスク</p>
                    {taskList.map((t, index) => (
                        <li key={index}>
                            <p>{t}</p>
                            <Button onClick={() => AddDoneTask(index)}>完了</Button>
                        </li>
                    ))}
                </Tasks>
                {/* 完了済みタスク一覧 */}
                <Dones>
                    <p style={pBold}>完了済みタスク</p>
                    {doneList.map((d, index) => (
                        <li key={index}>
                            <p>{d}</p>
                            <Button onClick={() => BackToTask(index)}>戻す</Button>
                        </li>
                    ))}
                </Dones>
            </TodoContent>
        </TodoOrigin>
    );
};

const TodoOrigin = styled.div`
    font-family: "Yu Gothic";
    max-width: 900px;
    padding: 2em;
    margin: 0 auto;  
    background-color: #f8f8f8;
    border: 1.5px solid aquamarine;
    border-radius: 16px;
`;

const Title = styled.h1`
    font-size: 24px;
    text-decoration: underline;
`;

const TodoForm = styled.div`
    
`;

const Button = styled.button`
    display: inline-block;
    vertical-align: middle;
    padding: 6px 12px;
    background-color: white;
    border: 1px solid black;
    cursor: pointer;
    transition: all .2s;
    &:hover {
        background-color: black;
        color: white;
    }
`;
const TodoInput = styled.input`
    display: inline-block;
    vertical-align: middle;
    padding: 6px;
    font-size: 18px;
    margin-right: 1em;
    outline: none;
`;

const TodoContent = styled.div`
    display: flex;
    justify-content: space-around;
    /* align-items: center;   */
`;

const Tasks = styled.ul`
    
`;

const Dones = styled.ul`
    
`;