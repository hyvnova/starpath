import fs from 'fs/promises';
import path from 'path';
import { error } from '@sveltejs/kit';
import { marked } from 'marked';


export async function load({ params }) {
	const id: string  = params.id; 

	const filePath = path.join(process.cwd(), 'static', 'chapters', `Capitulo ${id}.md`);

	try {
		// Read the file content as UTF-8 text
		const content = await fs.readFile(filePath, 'utf8');

		//  Convert markdown to HTML using a library like 'marked' if needed.
		const html = marked(content);
		return { content: html, id: parseInt(id) };


		// return { content, id };
	} catch (err) {
		// If the file isn't found, throw a 404 error
		throw error(404, 'Chapter not found');
	}
}
