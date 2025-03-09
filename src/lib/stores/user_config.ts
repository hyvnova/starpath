import { writable } from 'svelte/store';
import { browser } from '$app/environment';


export const FONTS = [
    'Ubuntu',
    'Roboto',
    'Open Sans',
    'Writer',
    'Fira Code',
    'Fira Sans'
]



const HISTORY_LIMIT: number = 5;

class History {
    limit: number;
    history: string[];

    constructor(limit: number | undefined = HISTORY_LIMIT) {
        this.limit = limit;
        this.history = [];
    }

    push(value: string) {
        this.history.unshift(value);

        if (this.history.length > this.limit) {
            this.history.pop();
        }
    }
}

type UserConfig = {
    font: typeof FONTS[number],
    font_size: number, // 12 - 24
    background: string // CSS valid background property
    background_history: string[] // History of background colors 
    color: string // CSS valid color property ,
    color_history: string[];

}


const default_value: UserConfig = {
    font: 'Fira Code',
    font_size: 16,
    background: "black",
    color: "whitesmoke",
    background_history: [],
    color_history: []
}

function load_config() {
    let config = default_value;
    if (browser && localStorage.getItem('user_config')) {
        config = JSON.parse(localStorage.getItem('user_config') || '') as UserConfig;
    }

    // Check for missing keys
    for (const key in default_value) {
        if (!(key in config)) {
            // @ts-ignore
            config[key] = default_value[key];
        }
    }

    return config;

}


const initial_value: UserConfig = load_config();
const user_config = writable(initial_value);

user_config.subscribe((value) => {
    if (browser) {
        localStorage.setItem('user_config', JSON.stringify(value));
    }
});

export default user_config;