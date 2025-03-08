import fs from 'fs/promises';
import path from 'path';
import { error } from '@sveltejs/kit';
import last_chapter_id from '$lib/stores/last_chapter_id';
import { get } from 'svelte/store';

export async function load() {
    const chapters_dir = path.join(process.cwd(), 'static', 'chapters');

    // Get title of each chapter which it's the first line of the file
    // as in ## Chapter Name

    const chapters = await fs.readdir(chapters_dir);

    let last_ch: number;

    const titles = await Promise.all(chapters.map(async (chapter) => {
        // Create file path
        const filePath = path.join(chapters_dir, chapter);

        // Read file
        const content = await fs.readFile(filePath, 'utf8');

        // Extract title
        const title = content.split('\n')[0].replace('## ', '');


        return title;
    }));

    return { titles };
}
