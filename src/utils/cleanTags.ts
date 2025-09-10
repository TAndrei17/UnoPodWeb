const cleanTags = (text: string): string => text.replace(/<[^>]+>/g, ' ');

export default cleanTags;
