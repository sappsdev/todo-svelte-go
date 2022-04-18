import { writable } from 'svelte/store';

export interface Snackbar {
    open: boolean;
    color: string;
    message: string;
}

function createSnackbar() {
	const { subscribe, set } = writable<Snackbar>({
        open: false,
        color: "alert-info",
        message: ""
    });

    const active = (color, message) => {
        set({
            color: color,
            message: message,
            open: true
        })
        setTimeout(() =>{ 
            set({
                color: "alert-info",
                message: "",
                open: false
            })
        }, 5000);      
    }

	return {
		subscribe,
        info: (message) => {
            active("alert-info", message);
        },
        warning: (message) => {
            active("alert-warning", message);
        },
        success: (message) => {
            active("alert-success", message);
        },
        error: (message) => {
            active("alert-error", message);
        },
	};
}

export const snackbar = createSnackbar();