import { error } from '@sveltejs/kit';
import { marked } from 'marked';

export async function load({ params }) {
	const id: string = params.id;
	const fileName = `Capitulo ${id}.md`;
	// Construct the URL for the raw file from the GitHub repository.
	// Adjust "main" if your default branch is different.
	const fileUrl = `https://raw.githubusercontent.com/hyvnova/starpath/main/chapters/${encodeURIComponent(fileName)}`;

	const res = await fetch(fileUrl);
	if (!res.ok) {
		throw error(404, 'Chapter not found');
	}

	let content = await res.text();

	// Remove obsidian links
	content = content.replace("[[", "").replace("]]", "");

	const html = marked(content);
	return { content: html, id: parseInt(id) };
}
