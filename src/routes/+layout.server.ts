import { error } from '@sveltejs/kit';

export async function load() {
    // GitHub API endpoint for the chapters folder in the repository
    const apiUrl = "https://api.github.com/repos/hyvnova/starpath/contents/chapters";

    // Fetch the list of files from the repository
    const res = await fetch(apiUrl);
    if (!res.ok) {
        throw error(res.status, `Failed to fetch chapters:\n${res.text}`);
    }

    // The response returns an array of file objects
    const files = await res.json();

    // Filter to only include markdown files (e.g., those ending with .md)
    const markdownFiles = files.filter((file: any) => file.name.endsWith('.md'));

    // For each markdown file, fetch its content and extract the title from the first line
    const titles = await Promise.all(
        markdownFiles.map(async (file: any) => {
            const fileRes = await fetch(file.download_url);
            if (!fileRes.ok) {
                throw error(fileRes.status, `Failed to fetch file ${file.name}`);
            }
            const content = await fileRes.text();
            const firstLine = content.split('\n')[0];
            // Remove "## " prefix from the title (if it exists)
            return firstLine.replace(/^##\s*/, '');
        })
    );

    return { titles };
}
