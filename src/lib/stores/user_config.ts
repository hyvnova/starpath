import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const FONTS = [
    'Ubuntu',
    'Roboto',
    'Open Sans',
    'Writer',
    'Fira Code',
    'Fira Sans'
];

const HISTORY_LIMIT: number = 5;

export class ColorHistory {
    limit: number;
    history: string[];

    constructor(limit: number = HISTORY_LIMIT, vals: string[] = []) {
        this.limit = limit;
        this.history = vals;
    }

    push(value: string) {
        // Si el valor ya existe, lo eliminamos para reinsertarlo al inicio
        const index = this.history.indexOf(value);
        if (index !== -1) {
            this.history.splice(index, 1);
        }
        this.history.unshift(value);
        if (this.history.length > this.limit) {
            this.history.pop();
        }
    }

    len() {
        return this.history.length;
    }

    toString() {
        return this.history.toString();
    }

    toJSON() {
        return this.history;
    }

    [Symbol.iterator]() {
        return this.history[Symbol.iterator]();
    }
}

type UserConfig = {
    font: typeof FONTS[number],
    font_size: number, // 12 - 24
    background: string, // CSS valid background property
    background_history: ColorHistory, // History of background colors 
    color: string, // CSS valid color property
    color_history: ColorHistory;
}

// Se inicializa con instancias de History en lugar de arreglos simples
export const default_value: UserConfig = {
    font: 'Fira Code',
    font_size: 16,
    background: "#121212",
    color: "#e0e0e0",
    background_history: new ColorHistory(HISTORY_LIMIT, []),
    color_history: new ColorHistory(HISTORY_LIMIT, [])
};

function load_config(): UserConfig {
    let config = default_value;

    if (browser && localStorage.getItem('user_config')) {
        let plain = JSON.parse(localStorage.getItem('user_config') || '');

        // Comprobar claves faltantes y asignar valores por defecto si es necesario
        for (const key in default_value) {
            if (!(key in plain)) {
                // @ts-ignore
                plain[key] = default_value[key];
            }
        }

        // Reconstruir las instancias de History si se recibieron como arreglos
        plain.background_history = new ColorHistory(HISTORY_LIMIT, plain.background_history);
        plain.color_history = new ColorHistory(HISTORY_LIMIT, plain.color_history);

        config = plain as unknown as UserConfig;
    }

    return config;
}

const initial_value: UserConfig = load_config();
const user_config = writable(initial_value);

user_config.subscribe((value) => {
    if (browser) {
        // Gracias a toJSON, JSON.stringify convertirá correctamente las instancias de History a arreglos.
        localStorage.setItem('user_config', JSON.stringify(value));
    }
});

export default user_config;
