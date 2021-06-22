import React, {ChangeEvent} from 'react';
import './App.css';
import {FilterType, TasksType} from "./App";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import {Button, Checkbox, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";

export type ToDoListType = {
    id: string
    title: string
    tasks: Array<TasksType>
    removeTasks: (id: string, todoListId: string) => void
    removeTodoList: (todoListId: string) => void
    ChangeFilter: (value: FilterType, todoListId: string) => void
    addTask: (t: string, todoListId: string) => void
    ChangeTasksStatus: (id: string, isDone: boolean, todoListId: string) => void
    ChangeTodoListTitle: (id: string, title: string) => void
    ChangeTaskTitle: (id: string, title: string, todolistId: string) => void
    filter: FilterType
}

export function ToDoList(props: ToDoListType) {
    const addTask = (title: string) => {
        props.addTask(title, props.id)
    }
    const removeTodoList = () => {
        props.removeTodoList(props.id)
    }
    const onChangeTasksAll = () => {
        props.ChangeFilter('all', props.id)
    }
    const onChangeTasksActive = () => {
        props.ChangeFilter('active', props.id)
    }
    const onChangeTasksCompleted = () => {
        props.ChangeFilter('completed', props.id)
    }
    const changeTodoListTitle = (title: string) => {
        props.ChangeTodoListTitle(title, props.id)
    }
    return (
        <div>
            <h3>
                <EditableSpan title={props.title} changeTitle={changeTodoListTitle}/>
                <IconButton onClick={removeTodoList}>
                    <Delete/>
                </IconButton>
            </h3>
            <AddItemForm addItem={addTask}/>
            <ul>
                {props.tasks.map((t) => {
                    const onClickHandler = () => {
                        props.removeTasks(t.id, props.id)
                    }
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let isNewDoneValue = e.currentTarget.checked
                        props.ChangeTasksStatus(t.id, isNewDoneValue, props.id)
                    }
                    const changeTaskTitle = (newTitle: string) => {
                        props.ChangeTaskTitle(t.id, newTitle, props.id)
                    }
                    return <li key={t.id} className={t.isDone ? 'is-done' : ''}>
                        <Checkbox
                            color={'primary'}
                            onChange={onChangeHandler}
                            checked={t.isDone}
                        />
                        <EditableSpan title={t.title} changeTitle={changeTaskTitle}/>
                        <IconButton onClick={onClickHandler}>
                            <Delete/>
                        </IconButton>
                    </li>
                })}
            </ul>
            <div style={{paddingTop: '10px'}}>
                <Button variant={props.filter === 'all' ? 'outlined' : 'text'}
                        onClick={onChangeTasksAll}
                        color={'default'}
                >All
                </Button>
                <Button variant={props.filter === 'active' ? 'outlined' : 'text'}
                        onClick={onChangeTasksActive}
                        color={'primary'}>Active
                </Button>
                <Button variant={props.filter === 'completed' ? 'outlined' : 'text'}
                        onClick={onChangeTasksCompleted}
                        color={'secondary'}>Completed
                </Button>
            </div>
        </div>
    );
}