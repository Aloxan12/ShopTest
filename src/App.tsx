import React, {useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import {ToDoList} from './ToDoList';
import {AddItemForm} from "./AddItemForm";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";

export type TasksType = {
    id: string
    title: string
    isDone: boolean
}
export type TodoListType = {
    id: string
    title: string
    filter: FilterType
}
export type TasksStateType = {
    [key: string]: Array<TasksType>
}
export type FilterType = 'all' | 'active' | 'completed'

function App() {
    const todoList1 = v1()
    const todoList2 = v1()

    const [todoLists, setTodoList] = useState<Array<TodoListType>>([
        {id: todoList1, title: 'What to learn', filter: 'all'},
        {id: todoList2, title: 'What to buy', filter: 'all'}
    ])

    let [tasks, setTasks] = useState<TasksStateType>({
            [todoList1]: [
                {id: v1(), title: "HTML", isDone: true},
                {id: v1(), title: "CSS", isDone: true},
                {id: v1(), title: "JS", isDone: false},
                {id: v1(), title: "React", isDone: false},
            ],
            [todoList2]: [
                {id: v1(), title: "Bread", isDone: true},
                {id: v1(), title: "Milk", isDone: true},
                {id: v1(), title: "Beer", isDone: false},
                {id: v1(), title: "Oil", isDone: false},
            ],
        }
    )

    function removeTasks(taskID: string, toDoListId: string) {
        const todoListTasks = tasks[toDoListId]
        tasks[toDoListId] = todoListTasks.filter(t => t.id !== taskID)
        setTasks({...tasks})
    }

    function ChangeFilter(value: FilterType, todoListId: string) {
        let todoList = todoLists.find(tl => tl.id === todoListId)
        if (todoList) {
            todoList.filter = value
            setTodoList([...todoLists])
        }
    }

    function addTask(title: string, todoListId: string) {
        let task = {id: v1(), title: title, isDone: false};
        let todoListTasks = tasks[todoListId]
        tasks[todoListId] = [task, ...todoListTasks]
        setTasks({...tasks})
    }
    function changeTaskTitle(taskId: string, newTitle: string, todoListId: string){
        const todoListTask = tasks[todoListId]
        const task = todoListTask.find(t => t.id === taskId)
        if(task){
            task.title = newTitle
            setTasks({...tasks})
        }
    }
    function ChangeStatus(id: string, isDone: boolean, todoListId: string) {
        let todoListTasks = tasks[todoListId]
        let task = todoListTasks.find(t => t.id === id)
        if (task) {
            task.isDone = isDone
            setTasks({...tasks});
        }
    }

    function removeTodoList(todoListId: string) {
        setTodoList(todoLists.filter(tl => tl.id !== todoListId))
        delete tasks[todoListId]
        setTasks({...tasks})
    }

    function addTodoList(title: string) {
        let newTodoListId = v1()
        let newTodoList: TodoListType = {id: newTodoListId, title, filter:'all'}
        setTodoList([newTodoList, ...todoLists])
        setTasks({
            ...tasks,
            [newTodoListId]: []
        })
    }
    const changeTodoListTitle = (newTitle: string, todoListId: string)=>{
        const todoList = todoLists.find(tl=> tl.id === todoListId)
        if(todoList){
            todoList.title = newTitle
            setTodoList([...todoLists])
        }
    }


    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu />
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
           <Container fixed>
               <Grid container style={{padding: "10px"}}>
                   <AddItemForm addItem={addTodoList} />
               </Grid>
               <Grid container spacing={8}>
                   {
                       todoLists.map(tl => {
                           let allTodoListTasks = tasks[tl.id]
                           let tasksForToDoList = allTodoListTasks
                           if (tl.filter === 'active') {
                               tasksForToDoList = allTodoListTasks.filter(t => t.isDone === false)
                           }
                           if (tl.filter === 'completed') {
                               tasksForToDoList = allTodoListTasks.filter(t => t.isDone === true)
                           }
                           return (
                               <Grid item>
                                   <Paper style={{padding: "10px"}} elevation={3}>
                                       <ToDoList
                                           key={tl.id}
                                           id={tl.id}
                                           title={tl.title}
                                           tasks={tasksForToDoList}
                                           removeTasks={removeTasks}
                                           removeTodoList={removeTodoList}
                                           ChangeFilter={ChangeFilter}
                                           ChangeTodoListTitle={changeTodoListTitle}
                                           addTask={addTask}
                                           ChangeTasksStatus={ChangeStatus}
                                           ChangeTaskTitle={changeTaskTitle}
                                           filter={tl.filter}
                                       />
                                   </Paper>
                               </Grid>
                           )
                       })
                   }
               </Grid>
           </Container>
        </div>
    );
}

export default App;
