const cleanTags = (text?: string): string => {
	if (!text) {
		return '';
	}

	return text.replace(/<[^>]+>/g, ' ');
};

export default cleanTags;
