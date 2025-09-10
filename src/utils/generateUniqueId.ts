// Generates a stable, URL-friendly unique ID from a given title

const generateUniqueId = (title: string): string => {
	return title
		.trim() // Remove leading/trailing whitespace
		.toLowerCase() // Convert to lowercase
		.normalize('NFKD') // Decompose accented characters (e.g., é → e +  ́)
		.replace(/[\u0300-\u036f]/g, '') // Remove diacritic marks (accents)
		.replace(/[^\p{L}\p{N}\s-]/gu, '') // Keep only letters, numbers, spaces, and dashes (in any language)
		.replace(/[\s_-]+/g, '-') // Convert groups of space/underscore/dash to a single dash
		.replace(/^-+|-+$/g, ''); // Remove leading/trailing dashes
};

export default generateUniqueId;
