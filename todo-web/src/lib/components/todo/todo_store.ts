import { writable } from 'svelte/store';
import { get } from '$lib/api'
import type { Todo } from './todo_model';

export const open_todo_form = writable(false)

function getTodo()  {
    const { subscribe, set } = writable<Todo>({
        id: null,
        name: "",
        description: "",
        logo: "",
        status: true,
        number: null,
        created_at: "",
        update_at: ""
    });

    return {
        subscribe,
        set,
        reset : () => set({
            id: null,
            name: "",
            description: "",
            logo: "",
            status: true,
            number: null,
            created_at: "",
            update_at: ""  
        })
    }
}

export const todo = getTodo()

function getTodos() {
    const { subscribe, set } = writable<Todo[]>([])
    return {
        subscribe,
        get : async() => {
            const url = "v1/todos/list" 
            const res = await get(url)
            set(res.channels)   
        }
    }
}
  
export const todos = getTodos();

