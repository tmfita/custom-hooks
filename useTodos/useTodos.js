import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

export const useTodos = () => {
    const initialState = [];
    //la función init es la que le pasamos al reducer al inicializarse el componente
    //en este caso, nos guardamos los todos del localstorage para que no se vacíe con el useEffect
    const init =  () => {
        return JSON.parse( localStorage.getItem('todos') || [])
    }
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        //guardamos el state en local storage (si todos está vacío, envía un array vacío)
        localStorage.setItem('todos', JSON.stringify(todos) || [])
      }, [todos])
    const handleNewTodo = ( todo ) => {
        //como tenemos un reducer, hay que hacer uso de él para crear un nuevo state
        const action = {
            type: 'Add Todo',
            payload: todo
        }
        dispatch(action)
    }
    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: 'Remove Todo',
            payload: id
        })
    }
    const handleToggleTodo = ( id ) => {
        dispatch({
            type: 'Toggle Todo',
            payload: id
        })
    }
    const todosCount = todos.length
    const pendingTodosCount = todos.filter(todo=>!todo.done).length
    return { todos, handleDeleteTodo, handleNewTodo, handleToggleTodo, todosCount, pendingTodosCount }

}